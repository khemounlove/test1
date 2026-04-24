// products.js - Complete Product Data for Mini Accessories Store
// Contains 32 products with full details including images, prices, ratings, and descriptions

export const PRODUCTS_DATA = [
  { 
    id: 1, 
    name: 'កាបូបស្បែក', 
    image: 'images/1.jpg', 
    category: 'កាបូប', 
    price: 29.99, 
    oldPrice: 49.99, 
    sale: true, 
    isNew: false, 
    rating: 4.8, 
    description: 'កាបូបស្បែកពិតប្រាកដ រចនាបែបទំនើប អាចដាក់របស់របរប្រើប្រាស់ប្រចាំថ្ងៃបានច្រើន។ មានពណ៌ខ្មៅ ត្នោត និងស។',
    stock: 25,
    galleryImages: ['images/1.jpg', 'images/01.jpg', 'images/001.jpg']
  },
  { 
    id: 2, 
    name: 'ខ្សែកសំអាង', 
    image: 'images/2.jpg', 
    category: 'ខ្សែក', 
    price: 15.99, 
    oldPrice: null, 
    sale: false, 
    isNew: true, 
    rating: 4.6, 
    description: 'ខ្សែកប្រាក់សុទ្ធ រចនាប្លែកពីគេ មានត្បូងពេជ្រភ្ជាប់ជាមួយ។ សាកសមសម្រាប់ពាក់ក្នុងពិធីបុណ្យផ្សេងៗ។',
    stock: 50,
    galleryImages: ['images/2.jpg', 'images/02.jpg', 'images/002.jpg']
  },
  { 
    id: 3, 
    name: 'កាបូប Makeup', 
    image: 'images/3.jpg', 
    category: 'កាបូប', 
    price: 12.99, 
    oldPrice: 19.99, 
    sale: true, 
    isNew: false, 
    rating: 4.7, 
    description: 'កាបូបតូចសម្រាប់ដាក់គ្រឿងសំអាង មានពណ៌ផ្កាឈូក ទាន់សម័យ។ អាចយកទៅដាក់ក្នុងកាបូបធំបានស្រួល។',
    stock: 30,
    galleryImages: ['images/3.jpg', 'images/03.jpg', 'images/003.jpg']
  },
  { 
    id: 4, 
    name: 'ក្រវិលមាស', 
    image: 'images/4.jpg', 
    category: 'ក្រវិល', 
    price: 39.99, 
    oldPrice: 59.99, 
    sale: true, 
    isNew: false, 
    rating: 4.9, 
    description: 'ក្រវិលមាស 14k រចនាបែបទំនើប សាកសមសម្រាប់ពាក់គ្រប់ឱកាស។ មិនបង្កអាឡែស៊ីឡើយ។',
    stock: 32,
    galleryImages: ['images/4.jpg', 'images/04.jpg', 'images/004.jpg']
  },
  { 
    id: 5, 
    name: 'ខ្សែដៃពេជ្រ', 
    image: 'images/5.jpg', 
    category: 'ខ្សែដៃ', 
    price: 49.99, 
    oldPrice: 79.99, 
    sale: true, 
    isNew: true, 
    rating: 5.0, 
    description: 'ខ្សែដៃប្រាក់សុទ្ធ មានពេជ្រភ្ជាប់ ភ្លឺថ្លាស្អាតណាស់។ អាចកែសម្រួលទំហំបាន។',
    stock: 18,
    galleryImages: ['images/5.jpg', 'images/05.jpg', 'images/005.jpg']
  },
  { 
    id: 6, 
    name: 'កន្សែងសូត្រ', 
    image: 'images/6.jpg', 
    category: 'កន្សែង', 
    price: 18.99, 
    oldPrice: null, 
    sale: false, 
    isNew: true, 
    rating: 4.5, 
    description: 'កន្សែងសូត្រខ្មែរ គុណភាពខ្ពស់ វាយនភាពទន់រលោង។ ផលិតដោយសិប្បករខ្មែរ។',
    stock: 56,
    galleryImages: ['images/6.jpg', 'images/06.jpg', 'images/006.jpg']
  },
  { 
    id: 7, 
    name: 'នាឡិកាដៃ', 
    image: 'images/7.jpg', 
    category: 'នាឡិកា', 
    price: 89.99, 
    oldPrice: 129.99, 
    sale: true, 
    isNew: false, 
    rating: 4.8, 
    description: 'នាឡិកាដៃម៉ាកល្បី ធានាគុណភាព 100% ។ មានការធានា 2 ឆ្នាំ។',
    stock: 15,
    galleryImages: ['images/7.jpg', 'images/07.jpg', 'images/007.jpg']
  },
  { 
    id: 8, 
    name: 'វ៉ែនតា', 
    image: 'images/8.jpg', 
    category: 'វ៉ែនតា', 
    price: 35.99, 
    oldPrice: 55.99, 
    sale: true, 
    isNew: false, 
    rating: 4.6, 
    description: 'វ៉ែនតាម៉ូដទាន់សម័យ ការពារកាំរស្មី UV 400។ មានច្រើនពណ៌ជ្រើសរើស។',
    stock: 40,
    galleryImages: ['images/8.jpg', 'images/08.jpg', 'images/008.jpg']
  },
  { 
    id: 9, 
    name: 'គ្រឿងតុបតែងសក់', 
    image: 'images/9.jpg', 
    category: 'គ្រឿងតុបតែង', 
    price: 8.99, 
    oldPrice: 14.99, 
    sale: true, 
    isNew: false, 
    rating: 4.4, 
    description: 'គ្រឿងតុបតែងសក់ធ្វើអំពីជ័រ និងត្បូង ស្អាតទាន់សម័យ។',
    stock: 65,
    galleryImages: ['images/9.jpg', 'images/09.jpg', 'images/009.jpg']
  },
  { 
    id: 10, 
    name: 'កូនក្រវិលប្រាក់', 
    image: 'images/10.jpg', 
    category: 'ក្រវិល', 
    price: 14.99, 
    oldPrice: 24.99, 
    sale: true, 
    isNew: true, 
    rating: 4.7, 
    description: 'កូនក្រវិលប្រាក់សុទ្ធ រចនាតូចស្អាត សាកសមសម្រាប់ពាក់ប្រចាំថ្ងៃ។',
    stock: 48,
    galleryImages: ['images/10.jpg', 'images/010.jpg', 'images/0010.jpg']
  },
  { 
    id: 11, 
    name: 'ស្បែកជើងប៉ាក់', 
    image: 'images/11.jpg', 
    category: 'ស្បែកជើង', 
    price: 25.99, 
    oldPrice: 39.99, 
    sale: true, 
    isNew: false, 
    rating: 4.5, 
    description: 'ស្បែកជើងប៉ាក់ដោយដៃ មានពណ៌ស្អាតៗ ផាសុខភាពពេលពាក់។',
    stock: 28,
    galleryImages: ['images/11.jpg', 'images/011.jpg', 'images/0011.jpg']
  },
  { 
    id: 12, 
    name: 'កាបូបស្ពាយ', 
    image: 'images/12.jpg', 
    category: 'កាបូប', 
    price: 45.99, 
    oldPrice: 69.99, 
    sale: true, 
    isNew: false, 
    rating: 4.9, 
    description: 'កាបូបស្ពាយសម្រាប់នារី មានហោប៉ៅច្រើន អាចដាក់កុំព្យូទ័របាន។',
    stock: 22,
    galleryImages: ['images/12.jpg', 'images/012.jpg', 'images/0012.jpg']
  },
  { 
    id: 13, 
    name: 'អាវយឺតបោះពុម្ព', 
    image: 'images/13.jpg', 
    category: 'សំលៀកបំពាក់', 
    price: 11.99, 
    oldPrice: null, 
    sale: false, 
    isNew: true, 
    rating: 4.3, 
    description: 'អាវយឺតបោះពុម្ពកំប្លែងៗ មានច្រើនទំហំ S-XXL។',
    stock: 100,
    galleryImages: ['images/13.jpg', 'images/013.jpg', 'images/0013.jpg']
  },
  { 
    id: 14, 
    name: 'មួកបេស្បល', 
    image: 'images/14.jpg', 
    category: 'មួក', 
    price: 9.99, 
    oldPrice: 16.99, 
    sale: true, 
    isNew: false, 
    rating: 4.4, 
    description: 'មួកបេស្បលម៉ូដទាន់សម័យ ការពារកម្តៅថ្ងៃបានល្អ។',
    stock: 55,
    galleryImages: ['images/14.jpg', 'images/014.jpg', 'images/0014.jpg']
  },
  { 
    id: 15, 
    name: 'ក្រវិលកញ្ចក់', 
    image: 'images/15.jpg', 
    category: 'ក្រវិល', 
    price: 6.99, 
    oldPrice: null, 
    sale: false, 
    isNew: true, 
    rating: 4.2, 
    description: 'ក្រវិលកញ្ចក់ពណ៌ស្រស់ស្អាត ស្រាលៗ ពាក់ស្រួល។',
    stock: 80,
    galleryImages: ['images/15.jpg', 'images/015.jpg', 'images/0015.jpg']
  },
  { 
    id: 16, 
    name: 'ទឹកអប់', 
    image: 'images/16.jpg', 
    category: 'ទឹកអប់', 
    price: 29.99, 
    oldPrice: 49.99, 
    sale: true, 
    isNew: false, 
    rating: 4.8, 
    description: 'ទឹកអប់ក្លិនឈ្ងុយឆ្ងាញ់ ក្លិនក្រអូបយូរអង្វែង 24 ម៉ោង។',
    stock: 35,
    galleryImages: ['images/16.jpg', 'images/016.jpg', 'images/0016.jpg']
  },
  { 
    id: 17, 
    name: 'ឈុតគ្រឿងសំអាង', 
    image: 'images/17.jpg', 
    category: 'គ្រឿងសំអាង', 
    price: 24.99, 
    oldPrice: 39.99, 
    sale: true, 
    isNew: false, 
    rating: 4.7, 
    description: 'ឈុតគ្រឿងសំអាងមាន ក្រែមលាបមុខ ម៉ាស្ការ៉ា និងក្រែមលាបបបូរមាត់។',
    stock: 25,
    galleryImages: ['images/17.jpg', 'images/017.jpg', 'images/0017.jpg']
  },
  { 
    id: 18, 
    name: 'ខ្សែក្រវាត់', 
    image: 'images/18.jpg', 
    category: 'គ្រឿងបន្លាស់', 
    price: 13.99, 
    oldPrice: 19.99, 
    sale: true, 
    isNew: false, 
    rating: 4.5, 
    description: 'ខ្សែក្រវាត់ស្បែក មានពណ៌ខ្មៅ និងត្នោត។',
    stock: 60,
    galleryImages: ['images/18.jpg', 'images/018.jpg', 'images/0018.jpg']
  },
  { 
    id: 19, 
    name: 'ក្រវិលខ្សែសង្វាក់', 
    image: 'images/19.jpg', 
    category: 'ក្រវិល', 
    price: 11.99, 
    oldPrice: null, 
    sale: false, 
    isNew: true, 
    rating: 4.6, 
    description: 'ក្រវិលខ្សែសង្វាក់វែងៗ ទាន់សម័យ សាកសមសម្រាប់ពាក់ជាមួយរ៉ូប។',
    stock: 42,
    galleryImages: ['images/19.jpg', 'images/019.jpg', 'images/0019.jpg']
  },
  { 
    id: 20, 
    name: 'ដាក់ទូរស័ព្ទ', 
    image: 'images/20.jpg', 
    category: 'គ្រឿងបន្លាស់', 
    price: 7.99, 
    oldPrice: 12.99, 
    sale: true, 
    isNew: false, 
    rating: 4.3, 
    description: 'ដាក់ទូរស័ព្ទខ្សែក្រវាត់ ងាយស្រួលដាក់ទូរស័ព្ទ កាត និងលុយ។',
    stock: 70,
    galleryImages: ['images/20.jpg', 'images/020.jpg', 'images/0020.jpg']
  },
  {
    id: 21,
    name: 'កាបូបដៃស្បែក',
    image: 'images/21.jpg',
    category: 'កាបូប',
    price: 34.99,
    oldPrice: 54.99,
    sale: true,
    isNew: false,
    rating: 4.7,
    description: 'កាបូបដៃស្បែកពិតប្រាកដ រចនាបែបទំនើប អាចដាក់របស់របរប្រើប្រាស់ប្រចាំថ្ងៃបានច្រើន។ មានពណ៌ខ្មៅ ត្នោត និងស។',
    stock: 20,
    galleryImages: ['images/21.jpg', 'images/021.jpg', 'images/0021.jpg']
  },
  {
    id: 22,
    name: 'ខ្សែកសំអាងពេជ្រ',
    image: 'images/22.jpg',
    category: 'ខ្សែក',
    price: 19.99,
    oldPrice: null,
    sale: false,
    isNew: true,
    rating: 4.6,
    description: 'ខ្សែកប្រាក់សុទ្ធ រចនាប្លែកពីគេ មានត្បូងពេជ្រភ្ជាប់ជាមួយ។ សាកសមសម្រាប់ពាក់ក្នុងពិធីបុណ្យផ្សេងៗ។',
    stock: 45,
    galleryImages: ['images/22.jpg', 'images/022.jpg', 'images/0022.jpg'] 
  },
  {
    id: 23,
    name: 'កាបូបសំអាង',
    image: 'images/23.jpg',
    category: 'កាបូប',
    price: 14.99,
    oldPrice: 24.99,
    sale: true,
    isNew: false,
    rating: 4.7,
    description: 'កាបូបតូចសម្រាប់ដាក់គ្រឿងសំអាង មានពណ៌ផ្កាឈូក ទាន់សម័យ។ អាចយកទៅដាក់ក្នុងកាបូបធំបានស្រួល។',
    stock: 35,
    galleryImages: ['images/23.jpg', 'images/023.jpg', 'images/0023.jpg'] 
  },
  {
    id: 24,
    name: 'ក្រវិលមាស 18k',
    image: 'images/24.jpg',
    category: 'ក្រវិល',
    price: 49.99,
    oldPrice: 79.99,
    sale: true,
    isNew: false,
    rating: 4.9,
    description: 'ក្រវិលមាស 18k រចនាបែបទំនើប សាកសមសម្រាប់ពាក់គ្រប់ឱកាស។ មិនបង្កអាឡែស៊ីឡើយ។',
    stock: 28,
    galleryImages: ['images/24.jpg', 'images/024.jpg', 'images/0024.jpg']
  },
  {
    id: 25,
    name: 'ខ្សែដៃពេជ្រ 2',
    image: 'images/25.jpg',
    category: 'ខ្សែដៃ',
    price: 59.99,
    oldPrice: 89.99,
    sale: true,
    isNew: true,
    rating: 5.0,
    description: 'ខ្សែដៃប្រាក់សុទ្ធ មានពេជ្រភ្ជាប់ ភ្លឺថ្លាស្អាតណាស់។ អាចកែសម្រួលទំហំបាន។',
    stock: 15,
    galleryImages: ['images/25.jpg', 'images/025.jpg', 'images/0025.jpg']
  },
  {
    id: 26,
    name: 'កន្សែងសូត្រ 2',
    image: 'images/26.jpg',
    category: 'កន្សែង',
    price: 22.99,
    oldPrice: null,
    sale: false,
    isNew: true,
    rating: 4.5,
    description: 'កន្សែងសូត្រខ្មែរ គុណភាពខ្ពស់ វាយនភាពទន់រលោង។ ផលិតដោយសិប្បករខ្មែរ។',
    stock: 40,
    galleryImages: ['images/26.jpg', 'images/026.jpg', 'images/0026.jpg']
  },
  {
    id: 27,
    name: 'នាឡិកាដៃ 2',
    image: 'images/27.jpg',
    category: 'នាឡិកា',
    price: 99.99,
    oldPrice: 149.99,
    sale: true,
    isNew: false,
    rating: 4.8,
    description: 'នាឡិកាដៃម៉ាកល្បី ធានាគុណភាព 100% ។ មានការធានា 2 ឆ្នាំ។',
    stock: 10,
    galleryImages: ['images/27.jpg', 'images/027.jpg', 'images/0027.jpg']
  },
  {
    id: 28,
    name: 'វ៉ែនតា 2',
    image: 'images/28.jpg',
    category: 'វ៉ែនតា',
    price: 45.99,
    oldPrice: 65.99,
    sale: true,
    isNew: false,
    rating: 4.6,
    description: 'វ៉ែនតាម៉ូដទាន់សម័យ ការពារកាំរស្មី UV 400។ មានច្រើនពណ៌ជ្រើសរើស។',
    stock: 30,
    galleryImages: ['images/28.jpg', 'images/028.jpg', 'images/0028.jpg']
   },
   {
    id: 29,
    name: 'គ្រឿងតុបតែងសក់ 2',
    image: 'images/29.jpg',
    category: 'គ្រឿងតុបតែង',
    price: 10.99,
    oldPrice: 16.99,
    sale: true,
    isNew: false,
    rating: 4.4,
    description: 'គ្រឿងតុបតែងសក់ធ្វើអំពីជ័រ និងត្បូង ស្អាតទាន់សម័យ។',
    stock: 50,
    galleryImages: ['images/29.jpg', 'images/029.jpg', 'images/0029.jpg']
  },
  {
    id: 30,
    name: 'កូនក្រវិលប្រាក់ 2',
    image: 'images/30.jpg',
    category: 'ក្រវិល',
    price: 18.99,
    oldPrice: 28.99,
    sale: true,
    isNew: true,
    rating: 4.7,
    description: 'កូនក្រវិលប្រាក់សុទ្ធ រចនាតូចស្អាត សាកសមសម្រាប់ពាក់ប្រចាំថ្ងៃ។',
    stock: 35,
    galleryImages: ['images/30.jpg', 'images/030.jpg', 'images/0030.jpg']
   },
   {
    id: 31,
    name: 'ស្បែកជើងប៉ាក់ 2',
    image: 'images/31.jpg',
    category: 'ស្បែកជើង',
    price: 29.99,
    oldPrice: 44.99,
    sale: true,
    isNew: false,
    rating: 4.5,
    description: 'ស្បែកជើងប៉ាក់ដោយដៃ មានពណ៌ស្អាតៗ ផាសុខភាពពេលពាក់។',
    stock: 20,
    galleryImages: ['images/31.jpg', 'images/031.jpg', 'images/0031.jpg']
   },
   {
    id: 32,
    name: 'កាបូបស្ពាយ 2',
    image: 'images/32.jpg',
    category: 'កាបូប',
    price: 55.99,
    oldPrice: 79.99,
    sale: true,
    isNew: false,
    rating: 4.9,
    description: 'កាបូបស្ពាយសម្រាប់នារី មានហោប៉ៅច្រើន អាចដាក់កុំព្យូទ័របាន។',
    stock: 15,
    galleryImages: ['images/32.jpg', 'images/032.jpg', 'images/0032.jpg']
   },
   {
    id: 33,
    name: 'អាវយឺតបោះពុម្ព 2',
    image: 'images/33.jpg',
    category: 'សំលៀកបំពាក់',
    price: 13.99,
    oldPrice: null,
    sale: false,
    isNew: true,
    rating: 4.3,
    description: 'អាវយឺតបោះពុម្ពកំប្លែងៗ មានច្រើនទំហំ S-XXL។',
    stock: 80,
    galleryImages: ['images/33.jpg', 'images/033.jpg', 'images/0033.jpg']
   },
   {
    id: 34,
    name: 'មួកបេស្បល 2',
    image: 'images/34.jpg',
    category: 'មួក',
    price: 11.99,
    oldPrice: 18.99,
    sale: true,
    isNew: false,
    rating: 4.4,
    description: 'មួកបេស្បលម៉ូដទាន់សម័យ ការពារកម្តៅថ្ងៃបានល្អ។',
    stock: 45,
    galleryImages: ['images/34.jpg', 'images/034.jpg', 'images/0034.jpg']
   },
   {
    id: 35,
    name: 'ក្រវិលកញ្ចក់ 2',
    image: 'images/35.jpg',
    category: 'ក្រវិល',
    price: 8.99,
    oldPrice: null,
    sale: false,
    isNew: true,
    rating: 4.2,
    description: 'ក្រវិលកញ្ចក់ពណ៌ស្រស់ស្អាត ស្រាលៗ ពាក់ស្រួល។',
    stock: 60,
    galleryImages: ['images/35.jpg', 'images/035.jpg', 'images/0035.jpg']
   },
   {
    id: 36,
    name: 'ទឹកអប់ 2',
    image: 'images/36.jpg',
    category: 'ទឹកអប់',
    price: 34.99,
    oldPrice: 54.99,
    sale: true,
    isNew: false,
    rating: 4.8,
    description: 'ទឹកអប់ក្លិនឈ្ងុយឆ្ងាញ់ ក្លិនក្រអូបយូរអង្វែង 24 ម៉ោង។',
    stock: 25,
    galleryImages: ['images/36.jpg', 'images/036.jpg', 'images/0036.jpg']
   },
   {
    id: 37,
    name: 'ឈុតគ្រឿងសំអាង 2',
    image: 'images/37.jpg',
    category: 'គ្រឿងសំអាង',
    price: 29.99,
    oldPrice: 44.99,
    sale: true,
    isNew: false,
    rating: 4.7,
    description: 'ឈុតគ្រឿងសំអាងមាន ក្រែមលាបមុខ ម៉ាស្ការ៉ា និងក្រែមលាបបបូរមាត់។',
    stock: 20,
    galleryImages: ['images/37.jpg', 'images/037.jpg', 'images/0037.jpg']
   },
    {
    id: 38,
    name: 'ខ្សែក្រវាត់ 2',
    image: 'images/38.jpg',
    category: 'គ្រឿងបន្លាស់',
    price: 15.99,
    oldPrice: 21.99,
    sale: true,
    isNew: false,
    rating: 4.5,
    description: 'ខ្សែក្រវាត់ស្បែក មានពណ៌ខ្មៅ និងត្នោត។',
    stock: 55,
    galleryImages: ['images/38.jpg', 'images/038.jpg', 'images/0038.jpg']
   },
   {
    id: 39,
    name: 'ក្រវិលខ្សែសង្វាក់ 2',
    image: 'images/39.jpg',
    category: 'ក្រវិល',
    price: 13.99,
    oldPrice: null,
    sale: false,
    isNew: true,
    rating: 4.6,
    description: 'ក្រវិលខ្សែសង្វាក់វែងៗ ទាន់សម័យ សាកសមសម្រាប់ពាក់ជាមួយរ៉ូប។',
    stock: 30,
    galleryImages: ['images/39.jpg', 'images/039.jpg', 'images/0039.jpg']
   },
   {
    id: 40,
    name: 'ដាក់ទូរស័ព្ទ 2',
    image: 'images/40.jpg',
    category: 'គ្រឿងបន្លាស់',
    price: 9.99,
    oldPrice: 14.99,
    sale: true,
    isNew: false,
    rating: 4.3,
    description: 'ដាក់ទូរស័ព្ទខ្សែក្រវាត់ ងាយស្រួលដាក់ទូរស័ព្ទ កាត និងលុយ។',
    stock: 65,
    galleryImages: ['images/40.jpg', 'images/040.jpg', 'images/0040.jpg'] 
    }
];

// Helper functions for filtering and searching products
export const getAllProducts = () => PRODUCTS_DATA;

export const getProductById = (id) => PRODUCTS_DATA.find(p => p.id === id);

export const getProductsByCategory = (category) => {
  if (category === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(p => p.category === category);
};

export const getDiscountedProducts = () => PRODUCTS_DATA.filter(p => p.sale === true);

export const getNewArrivals = () => PRODUCTS_DATA.filter(p => p.isNew === true);

export const getCategories = () => {
  const cats = [...new Set(PRODUCTS_DATA.map(p => p.category))];
  return ['all', ...cats];
};

export const searchProducts = (query) => {
  const q = query.toLowerCase();
  return PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
};

export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  switch(sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
};

// Export as default for convenience
export default PRODUCTS_DATA;