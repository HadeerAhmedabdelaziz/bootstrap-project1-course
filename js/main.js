// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')
// const toastElList = document.querySelectorAll('.toast')
// const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

// if (toastTrigger) {
//   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//   toastTrigger.addEventListener('click', () => {
//     toastBootstrap.show()
//   })
// }

var myModal = document.getElementById("myModal")
var myInput = document.getElementById("myInput")

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus()
})
// ////////////////////////////////////////////////////////////////////////////////////////////
// // var x=prompt("enter num1")
// // var y=prompt("enter num2")
// // var sum = x + y
// // var mul = x * y
// // var total = sum + mul

// // if(total%2 != 0){
// //   console.log(odd)
// // }
// //////////////////////////////////////////////
// // var x =prompt("enter nums")
// // var arr=[]
// // for(var i=0 ; i<x.length ; i++){
// //   var nameStu = prompt("enter student name" + i++)
// //   var degreeStu = prompt("enter his degree" + i++)
// //   arr[i]= nameStu + degreeStu
// // }
// // console.log(arr)
// //////////////////////////////////////////////////
// // var nums2 = [2, 2, 1, 1, 1, 2, 2];
// // for (var i = 0; i < nums2.length; i++) {
// //   if (nums2[0] == nums2[i]) {
    
// //   }
  
// // }
// // var x = prompt("enter num1")
// // var y = prompt("enter num2")
// // console.log(+x + +y)