[![Youtube][youtube-shield]][youtube-url]
[![Facebook][facebook-shield]][facebook-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Gastronomix - Blending Tradition & Innovation to Craft Culinary

# [Show Live preview](https://gastronomixx.netlify.app/)

# Feature & Sitemap

1. User can create his account using G-mail,Github(ongoing) Custom Mail and Password
2. One email can used once to create account.
3. General Layout:
   - Navbar
   - Content
   - Footer
4. Homepage
   1. Hero Section(slider)
   2. Popular Classes(top 6). There also have a button.By clicking that user can check all classes.
   3. Popular Instructors(top 6). There also have a button.By clicking that user can check academies all instructor.
   4. Top five reviews are shown in this section.
   5. A feedback form provided in this section. Where an user can send his thoughts to admin. If the user not logged in then s/he should provide a email else users mail will be used.
5. Instructors Page
   - In this page all of our instructors are shown with their basic data. eg. Photo,Name,email,number of class conducted.
   - There is a search bar where user can search for an instructor.
   - In every instructor cards,there have <b>see classes </b> button. By clicking that,user will redirect to a new page.
     - In this page all of classes which are conducted by him/her will shown with data (image,title,price,description). There also have a cart button.
     - By clicking the cart button, this class will be added to his <b> selected classes </b> pages.
     - In this page ,there have a section where shown the reviews given to him by students.
     - A form also given to give reviews. Without login this form won't visible. It also won't visible if logged in user is admin or instructor.
6. Classes Page
   - In this page all classes are shown.
   - Each class card have basic information of class. Like title,price,instructor,available seats & class banner.
   - There have a <b>Select </b> button. It will be disabled if a user logged in as admin/instructor and available seats equal zero.
   - Without logged in ,if a user click on this button, it will show a modal to ask if he wants to log in. if agree than it will redirect to login page.
7. Dashboard
   - There have 3 types of dashboard. One for student,one for Instructor and one for Admin.
   - Student Dashboard
     - Profile: In this page will shown basic info of user.
     - Selected Class: In this page, there will be shown all selected class by this student. in each class card there have pay button. by clicking there ,it will redirect to payment page. After successfull payment it will redirect to <b>Enrolled class</b> page.
     - Enrolled Clsses: In this page,there will be shown all classes which payement is successfull.
     - Payemnt History: In this page,there will be shown all transaction details of successfull payments.
     - Logout: It will use to logout from your account.
   - Instructor Dashboard
     - Profile: In this page will shown basic info of user.
     - Add Class: In this page,an instructor can add a class with required information. in primary,the status of class will be pending untill an admin approve the class.
     - Classes: In this page, there will be shown all classes which are conducted by this instructor. in each class card there have <b>edit</b> button. by clicking there ,it will redirect to edit class page. There also shown class status(pending/approved).
     - Logout: It will use to logout from your account.
   - Admin Dashboard
     - Profile: In this page will shown basic info of user.
     - Manage Class: In this page,all classes will be shown as table. An admin can approve,deny and send feedback to a class.
     - Manage Users: In this page,all users will be shown as table, An admin can change their role from here.
     - Logout: It will use to logout from your account.

# Focused On

<li> Using Components
<li> Routing
<li> State Management
<li> Context API
<li> API Calls
<li> Using Server
<li> Styling with using Tailwind and DaisyUI Framework
<li> Showing Customized Error/Loading/Spinner Page
<li> Using Firebase Authentication
<li> Using MongoDB Realtime Database
<li> Using Stripe Payment Gateway
<li> Using React Router Dom
<li> Using React Hook Form
<li> Using React Toastify& SweetAlert
<li> Using React Icons
<li> Using React Query
<li> Using framer-motion
<li> Using lottie animation

<br>

# How to Run

### Requirement

- Node.js
- npm
- MongoDB
- Stripe
- Firebase
- React

### Clone This Repository

1. You can clone this repository by running following command in terminal/command prompt:

```
https://github.com/ahsanulhoqueabir/gastro-client.git
```

or download zip file [from here](https://github.com/ahsanulhoqueabir/gastro-client)

2. Go to the cloned project directory

```
cd gastro-client
```

3. Install all the dependencies

```
npm install
```

4. Create a .env file in the root directory and add the following environment variables

```
VITE_SECURED_APIKEY = FirebaseSecuredKey
VITE_SECURED_AUTHDOMAIN= Firebase_SECURED_AUTHDOMAIN
VITE_SECURED_PROJECTID= firebaseSECURED_PROJECTID
VITE_SECURED_STORAGEBUCKET= firebaseSECURED_STORAGEBUCKET
VITE_SECURED_MESSAGINGSENDERID= firebaseSECURED_MESSAGINGSENDERID
VITE_SECURED_APPID= firebaseSECURED_APPID
VITE_Payment_GateWay_PK= Stripe_Payment_GateWay_PK
VITE_IMG_DB = IMgbbAPikey
```

5. Run the project

```
npm run dev
```

# Resource Used

1. For Animation: [Lottifiles](https://lottiefiles.com)
2. For Icons: [Heroicons](https://heroicons.com/)
3. For Images: [Freepik](freepik.com/ai/image-generator/)

<!-- Social Media Link -->

[youtube-shield]: https://img.shields.io/badge/-Youtube-black.svg?style=flat-square&logo=youtube&color=555&logoColor=white
[youtube-url]: https://youtube.com/@AhsanulAbir
[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor=white
[facebook-url]: https://facebook.com/mdahsanulhoqueabir
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor=white
[instagram-url]: https://instagram.com/Ahsanul.H.abir
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/AhsanulHoqueAbir

```

```
