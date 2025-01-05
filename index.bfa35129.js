document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("feedback-form"),t=document.getElementById("success-message");e.addEventListener("submit",s=>{s.preventDefault(),console.log("Збережені дані форми:",{name:e.name.value,email:e.email.value,message:e.message.value}),t.classList.remove("hidden"),e.reset()})});
//# sourceMappingURL=index.bfa35129.js.map
