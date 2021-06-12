var student = { id: 121, phone: 1745, name: 'Abir' }
var student2 = { id: 131, phone: 457, name: 'Mahiya' }
var phonePropName = 'phone'
var phoneNo = student[phonePropName];
var { phone } = student2


student2.phone = 5656
student2['phone'] = 666888
student2.cinema = 'ogni'
console.log(phoneNo)
console.log(student2)