const email = document.getElementById("email")
email.addEventListener('click', async () => {
  const para = document.getElementById("email-para");
  console.log(para.innerHTML)
  await navigator.clipboard.writeText(para.innerHTML)
  alert("Email has been copyied to clip board");
})
