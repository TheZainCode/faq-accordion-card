// PROJECT #7 — FAQ Accordion Card
const faqContainer=document.querySelector(".faq-container");
const faqItems=document.querySelectorAll(".faq-item");
faqItems.forEach(item=>{
    const question=item.querySelector(".faq-question");
    const answer=item.querySelector(".faq-answer");
    const icon=item.querySelector(".icon");
    answer.classList.add("hidden");
    question.addEventListener("click",()=>{
        const isActive=item.classList.contains("active");
        faqItems.forEach(otherItems=>{
            otherItems.classList.remove("active");
            otherItems.querySelector(".faq-answer").classList.add("hidden");
            otherItems.querySelector(".icon").textContent="+";
        });
        if(!isActive){
            item.classList.add("active");
            answer.classList.remove("hidden");
            icon.textContent="-";
        }
    });
});
