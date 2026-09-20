# Student Assessment Records / កំណត់ត្រាប៉ាន់ស្មានសិស្ស

Student Assessment Records is a classroom management and student grading system designed to record, track, and review student performance across multiple assessment areas.

កំណត់ត្រាប៉ាន់ស្មានសិស្ស គឺជាប្រព័ន្ធគ្រប់គ្រងវេនសិក្សា និងការប៉ាន់ស្មានសិស្ស ដែលត្រូវបានរចនាឡើងដើម្បីកត់ត្រា គ្រប់គ្រង និងពិនិត្យមើលស្ថានភាពការវិវត្តន៍របស់សិស្សក្នុងវិស័យប្រឡងផ្សេងៗ។

## Overview / ទិដ្ឋភាពទូទៅ

This project helps teachers manage student assessments and school records in one digital system.

គម្រោងនេះជួយគ្រូឱ្យគ្រប់គ្រងការប៉ាន់ស្មានសិស្ស និងកំណត់ត្រាសាលាដោយប្រើប្រព័ន្ធឌីជីថលមួយ។

It supports the following areas:
- Student registration and school ID tracking
- Listening and speaking assessment
- Reading assessment
- Project-based learning (PBL)
- Quiz tracking
- Homework evaluation
- Participation tracking
- Overall score calculation
- Sponsorship status management
- Teacher and management reporting

វាផ្តល់ការគាំទ្រ ដល់ផ្នែកដូចតទៅ៖
- ការចុះបញ្ជីសិស្ស និងកំណត់អត្តសញ្ញាណសាលា
- ការប៉ាន់ស្មានការនិយាយ និងការស្តាប់
- ការប៉ាន់ស្មានការអាន
- ការវាយតម្លៃ PBL (Project-Based Learning)
- ការតាមដានកិច្ចពិន្ទុ/Quiz
- ការវាយតម្លៃកិច្ចការផ្ទះ
- ការតាមដានការចូលរួមក្នុងថ្នាក់
- ការគណនាការប៉ាន់ស្មានសរុប
- ការគ្រប់គ្រងស្ថានភាពជំនួយ
- ការបង្ហាញរបាយការណ៍សម្រាប់គ្រូ និងអ្នកគ្រប់គ្រង

## Features / លក្ខណៈពិសេស

- Multi-tab assessment dashboard
- Add, edit, and delete student records
- Search for student results
- Score tracking by category
- Sponsorship status tracking
- Auto sync with Google Sheets
- Print-friendly report layout
- Classroom issue reporting

- ផ្ទាំងតាមដានសិស្សច្រើន tab
- បន្ថែម កែប្រែ និងលុបកំណត់ត្រាសិស្ស
- ស្វែងរកទិន្នន័យសិស្ស
- តាមដានពិន្ទុតាមប្រភេទ
- តាមដានស្ថានភាពជំនួយ
- Sync ដោយស្វ័យប្រវត្តិទៅ Google Sheets
- ផ្នែករបាយការណ៍ដែលអាចបោះពុម្ពបាន
- រាយការណ៍បញ្ហាប្រចាំថ្នាក់

## Tech Stack / Stack បច្ចេកទេស

- HTML
- CSS
- JavaScript
- Tailwind CSS
- Google Apps Script
- Google Sheets

## Project Structure / រចនាសម្ព័ន្ធគម្រោង

- `index.html` – Main dashboard and interface
- `Code.gs` – Google Apps Script backend for spreadsheet storage
- `SETUP_INSTRUCTIONS.md` – Setup and deployment steps
- `PERFORMANCE_OPTIMIZATIONS.md` – Performance-related notes
- `.gitignore` – Ignored files

- `index.html` – ផ្ទាំងដើម្បីប្រើប្រាស់សំខាន់
- `Code.gs` – Backend Google Apps Script សម្រាប់រក្សាទុកទិន្នន័យក្នុង Google Sheets
- `SETUP_INSTRUCTIONS.md` – ព័ត៌មាននិងជំហាន setup
- `PERFORMANCE_OPTIMIZATIONS.md` – ឯកសារអំពីការបង្កើនប្រសិទ្ធភាព
- `.gitignore` – ឯកសារដែលមិនត្រូវបានរាប់បញ្ចូលក្នុង Git

## How It Works / វិធីធ្វើការ

1. Teachers enter student data into the web interface.
2. Data is saved locally and synced to Google Sheets.
3. Google Apps Script stores the data in spreadsheet tabs.
4. The app loads and displays the data whenever the page is reopened.
5. Teachers can review performance, print records, and generate reports.

1. គ្រូបញ្ចូលទិន្នន័យសិស្សទៅក្នុងផ្ទាំងគេហទំព័រ។
2. ទិន្នន័យត្រូវបានរក្សាទុកក្នុងកម្មវិធីរបស់ browser និងធ្វើ sync ទៅ Google Sheets។
3. Google Apps Script រក្សាទុកទិន្នន័យក្នុង sheet ឬ tab ផ្សេងៗ។
4. ប្រព័ន្ធនឹងទាញយកទិន្នន័យឡើងវិញនៅពេលបើកឡើងម្ដងទៀត។
5. គ្រូអាចពិនិត្យលទ្ធផល ការបោះពុម្ពកំណត់ត្រា និងបង្កើតរបាយការណ៍។

## Setup Instructions / ជំហាន setup

### Step 1: Create the Google Sheet / ជំហានទី 1: បង្កើត Google Sheet

- Open Google Sheets
- Create a new spreadsheet
- Name it: `Student Assessment DB`

- បើក Google Sheets
- បង្កើត spreadsheet ថ្មី
- ដាក់ឈ្មោះថា: `Student Assessment DB`

### Step 2: Add Apps Script / ជំហានទី 2: បន្ថែម Apps Script

- Open the spreadsheet
- Go to `Extensions > Apps Script`
- Paste the content of `Code.gs`
- Save the project

- បើក spreadsheet
- ចូលទៅកាន់ `Extensions > Apps Script`
- បិទភ្ជាប់ code របស់ `Code.gs`
- Save project

### Step 3: Deploy as a Web App / ជំហានទី 3: Deploy ជា Web App

- In Apps Script, click `Deploy > New deployment`
- Select `Web app`
- Set:
  - Execute as: `Me`
  - Who has access: `Anyone`
- Deploy and copy the generated URL

- នៅក្នុង Apps Script សូមចុច `Deploy > New deployment`
- ជ្រើសរើស `Web app`
- កំណត់:
  - Execute as: `Me`
  - Who has access: `Anyone`
- Deploy ហើយចម្លង URL ដែលបានបង្កើត

### Step 4: Connect the Front-End / ជំហានទី 4: ភ្ជាប់ Front-End

- Open `index.html`
- Replace the placeholder URL with your Apps Script URL
- Save the file

- បើក `index.html`
- ជំនួស URL placeholder ដោយ URL Apps Script របស់អ្នក
- Save file

### Step 5: Run the App / ជំហានទី 5: បើកកម្មវិធី

- Open `index.html` in a browser
- Start entering student assessment data

- បើក `index.html` ក្នុង browser
- ចាប់ផ្តើមបញ្ចូលទិន្នន័យប៉ាន់ស្មានសិស្ស

For more details, see `SETUP_INSTRUCTIONS.md`.

សម្រាប់ព័ត៌មានលម្អិតបន្ថែម សូមមើល `SETUP_INSTRUCTIONS.md`។

## Use Case / ករណីប្រើប្រាស់

This project is designed for schools and classrooms where teachers need to:
- Track student performance regularly
- Record multiple assessments in one system
- Save and share academic reporting data
- Reduce paper-based grading workflows

គម្រោងនេះត្រូវបានរចនាឡើងសម្រាប់សាលា និងថ្នាក់រៀន ដែលគ្រូត្រូវការដើម្បី:
- តាមដានការវិវត្តន៍សិស្សជាបន្តបន្ទាប់
- កត់ត្រាប៉ាន់ស្មានជាច្រើនក្នុងប្រព័ន្ធតែមួយ
- រក្សាទុក និងចែករំលែកទិន្នន័យរបាយការណ៍សិក្សា
- ធ្វើឱ្យដំណើរការបានសាមញ្ញ និងកាត់បន្ថយការប្រើប្រាស់ giấy

## Important Notes / ចំណាំសំខាន់

- Google Sheets is used as the main data storage backend.
- Browser local storage is used as a backup and convenience layer.
- The deployed Apps Script URL should be managed carefully in production or school use.

- Google Sheets ត្រូវបានប្រើជាអង្គផ្ទុកទិន្នន័យសំខាន់។
- Browser local storage ត្រូវបានប្រើជាអ្វីដែលជួយ backup និងសមត្ថភាពប្រើប្រាស់។
- URL Apps Script ដែល deploy រួចគួរតែត្រូវគ្រប់គ្រងយ៉ាងប្រុងប្រយ័ត្ននៅក្នុងការប្រើប្រាស់ជាក់ស្តែង។

## License / អាជ្ញាប័ណ្ណ

This project does not currently include a license file.

គម្រោងនេះបច្ចុប្បន្នមិនទាន់មានឯកសារអាជ្ញាប័ណ្ណនៅឡើយទេ។

## Contributing / ការរួមចំណែក

Contributions are welcome.

Potential improvements:
- Better validation and scoring logic
- Improved UI/UX design
- Data export options
- Enhanced reporting tools
- Role-based access control

ការរួមចំណែកត្រូវបាន歓迎។

ការកែលម្អដែលអាចធ្វើបាន:
- ការពិនិត្យទិន្នន័យ និង logic ប៉ាន់ស្មានកាន់តែប្រសើរ
- ការរចនាផ្ទាំង UI/UX កាន់តែប្រសើរ
- ជម្រើសនាំចេញទិន្នន័យ
- ឧបករណ៍របាយការណ៍កាន់តែខ្នាត
- ការគ្រប់គ្រង quyềnចូលតាមតួនាទី

## Repository / កន្លែងឃ្លាំង

https://github.com/CMCKHMER/Student-Assesment-Records

## Contact / ទំនាក់ទំនង

For collaboration or questions, please visit the repository page above.

សម្រាប់ការសហការយ៉ាងឆាប់រហ័ស ឬសំណួរ សូមទៅទស្សនាកន្លែងឃ្លាំងខាងលើ។
