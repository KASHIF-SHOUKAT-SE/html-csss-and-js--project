function calculateAge(){
    const dob = new Date(document.getElementById('dob').value)
    const now = new Date();
    const diff = now- dob;

    const ageDate = new Date(diff)
    const age = Math.abs(ageDate.getUTCFullYear() -1970);
    
    document.getElementById('result').innerText = `your age is ${age} years`
    console.log(age);
}

