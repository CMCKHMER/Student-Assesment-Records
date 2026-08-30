/**
 * Google Apps Script Backend for Student Assessment Sheet
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet named "Student Assessment DB"
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click "Deploy" > "New Deployment"
 * 5. Select type: "Web app"
 * 6. Description: "Student Assessment API"
 * 7. Execute as: "Me" (your email)
 * 8. Who has access: "Anyone" (important!)
 * 9. Click "Deploy" and copy the Web App URL
 * 10. Paste that URL into your index.html where it says "YOUR_GOOGLE_SCRIPT_URL_HERE"
 */

const SHEET_NAME_STUDENTS = "Students";
const SHEET_NAME_PBL = "PBL";
const SHEET_NAME_HOMEWORK = "Homework";
const SHEET_NAME_PARTICIPATION = "Participation";
const SHEET_NAME_QUIZZES = "Quizzes";
const SHEET_NAME_LISTENING = "Listening";
const SHEET_NAME_READING = "Reading";
const SHEET_NAME_REPORTS = "Reports";

function doGet(e) {
  const action = e.parameter.action || 'getData';
  
  if (action === 'getData') {
    return getAllData();
  }
  
  return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid action' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Save all student data
    if (data.students) {
      saveAllSheets(data);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getAllData() {
  initializeSheets();
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get students from main sheet
  const studentsSheet = ss.getSheetByName(SHEET_NAME_STUDENTS);
  const studentData = studentsSheet.getDataRange().getValues();
  const headers = studentData[0];
  const students = [];
  
  for (let i = 1; i < studentData.length; i++) {
    const row = studentData[i];
    if (!row[0]) continue; // Skip empty rows
    
    const student = {};
    headers.forEach((header, idx) => {
      student[header] = row[idx];
    });
    
    // Parse arrays from string format
    if (student.listeningScores && typeof student.listeningScores === 'string') {
      student.listeningScores = JSON.parse(student.listeningScores);
    }
    if (student.readingScores && typeof student.readingScores === 'string') {
      student.readingScores = JSON.parse(student.readingScores);
    }
    if (student.pblScores && typeof student.pblScores === 'string') {
      student.pblScores = JSON.parse(student.pblScores);
    }
    if (student.homeworkScores && typeof student.homeworkScores === 'string') {
      student.homeworkScores = JSON.parse(student.homeworkScores);
    }
    if (student.participationScores && typeof student.participationScores === 'string') {
      student.participationScores = JSON.parse(student.participationScores);
    }
    if (student.quizScores && typeof student.quizScores === 'string') {
      student.quizScores = JSON.parse(student.quizScores);
    }
    
    students.push(student);
  }
  
  // Get PBL links
  const pblLinks = { worksheet: '', answer: '' };
  const pblSheet = ss.getSheetByName(SHEET_NAME_PBL);
  if (pblSheet) {
    const pblData = pblSheet.getDataRange().getValues();
    if (pblData.length > 1) {
      pblLinks.worksheet = pblData[1][0] || '';
      pblLinks.answer = pblData[1][1] || '';
    }
  }
  
  // Get Homework links
  const homeworkLinks = { worksheet: '', answer: '' };
  const hwSheet = ss.getSheetByName(SHEET_NAME_HOMEWORK);
  if (hwSheet) {
    const hwData = hwSheet.getDataRange().getValues();
    if (hwData.length > 1) {
      homeworkLinks.worksheet = hwData[1][0] || '';
      homeworkLinks.answer = hwData[1][1] || '';
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    students: students,
    pblLinks: pblLinks,
    homeworkLinks: homeworkLinks,
    version: '4.2-gs'
  })).setMimeType(ContentService.MimeType.JSON);
}

function saveAllSheets(data) {
  initializeSheets();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Clear and rebuild Students sheet
  const studentsSheet = ss.getSheetByName(SHEET_NAME_STUDENTS);
  studentsSheet.clearContents();
  
  // Define headers
  const headers = [
    'id', 'name', 
    'listeningScores', 'readingScores', 
    'pblScores', 'homeworkScores', 
    'participationScores', 'quizScores'
  ];
  
  studentsSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  studentsSheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  studentsSheet.getRange(1, 1, 1, headers.length).setBackground('#4285f4');
  studentsSheet.getRange(1, 1, 1, headers.length).setFontColor('white');
  
  // Write student data
  const rows = data.students.map(s => [
    s.id || '',
    s.name || '',
    JSON.stringify(s.listeningScores || []),
    JSON.stringify(s.readingScores || []),
    JSON.stringify(s.pblScores || []),
    JSON.stringify(s.homeworkScores || []),
    JSON.stringify(s.participationScores || []),
    JSON.stringify(s.quizScores || [])
  ]);
  
  if (rows.length > 0) {
    studentsSheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
  
  // Save PBL links
  const pblSheet = ss.getSheetByName(SHEET_NAME_PBL);
  pblSheet.clearContents();
  pblSheet.getRange(1, 1, 1, 2).setValues([['Worksheet URL', 'Answer Key URL']]);
  pblSheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  if (data.pblLinks) {
    pblSheet.getRange(2, 1, 1, 2).setValues([[
      data.pblLinks.worksheet || '',
      data.pblLinks.answer || ''
    ]]);
  }
  
  // Save Homework links
  const hwSheet = ss.getSheetByName(SHEET_NAME_HOMEWORK);
  hwSheet.clearContents();
  hwSheet.getRange(1, 1, 1, 2).setValues([['Worksheet URL', 'Answer Key URL']]);
  hwSheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  if (data.homeworkLinks) {
    hwSheet.getRange(2, 1, 1, 2).setValues([[
      data.homeworkLinks.worksheet || '',
      data.homeworkLinks.answer || ''
    ]]);
  }
  
  // Auto-resize columns for better visibility
  studentsSheet.autoResizeColumns(1, headers.length);
  pblSheet.autoResizeColumns(1, 2);
  hwSheet.autoResizeColumns(1, 2);
}

function initializeSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  const sheetsToCreate = [
    SHEET_NAME_STUDENTS,
    SHEET_NAME_PBL,
    SHEET_NAME_HOMEWORK,
    SHEET_NAME_PARTICIPATION,
    SHEET_NAME_QUIZZES,
    SHEET_NAME_LISTENING,
    SHEET_NAME_READING,
    SHEET_NAME_REPORTS
  ];
  
  sheetsToCreate.forEach(sheetName => {
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      ss.insertSheet(sheetName);
    }
  });
}

// Helper function to get management summary
function getManagementSummary() {
  const data = JSON.parse(getAllData().getContent());
  const students = data.students || [];
  
  if (students.length === 0) {
    return ContentService.createTextOutput(JSON.stringify({ error: 'No student data' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  // Calculate averages (you'll need to implement these based on your scoring logic)
  const totalStudents = students.length;
  
  return ContentService.createTextOutput(JSON.stringify({
    totalStudents: totalStudents,
    timestamp: new Date().toISOString(),
    message: 'Summary generated successfully'
  })).setMimeType(ContentService.MimeType.JSON);
}
