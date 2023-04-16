const $catchMode = document.getElementById('flexSwitchCheckDefault')

$catchMode.addEventListener('change', function(e){
    console.log($catchMode.checked)

    colorMode()

    localStorage.setItem('catchedMode', $catchMode.checked)

})


function colorMode(){
    if($catchMode.checked == true){
        document.querySelector('html').setAttribute('data-bs-theme', 'dark')
    } else {
        document.querySelector('html').setAttribute('data-bs-theme', 'light')
    }
}




const catchedMode = localStorage.getItem('catchedMode')

if(catchedMode == 'true'){
    $catchMode.checked = true
}

colorMode()

// if(localStorage.getItem('catchedMode') == 'true'){
//     document.querySelector('html').setAttribute('data-bs-theme', 'dark')
// } else {
//     document.querySelector('html').setAttribute('data-bs-theme', 'light')
// }