const accordionButtons = document.querySelectorAll('.faq-card__accordion-button');
const defaultOpenCard = document.querySelector('.faq-card__wrap--active');

if (defaultOpenCard) {
  const accordionText = defaultOpenCard.querySelector('.faq-card__text-wrap');
  accordionText.style.height = `${accordionText.scrollHeight}px`;
}

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener('click', () => {
    const accordionCard = accordionButton.parentElement;
    const accordionText = accordionCard.querySelector('.faq-card__text-wrap');
    const accordionButtonIcon = accordionButton.querySelector('.faq-card__accordion-button-icon');

    accordionCard.classList.toggle('faq-card__wrap--active');

    if (accordionCard.classList.contains('faq-card__wrap--active')) {
      accordionText.style.height = `${accordionText.scrollHeight}px`;
      accordionButtonIcon.classList.remove('faq-card__accordion-button-icon--closed');
      accordionButtonIcon.classList.add('faq-card__accordion-button-icon--opened');
      accordionButton.classList.add('faq-card__accordion-button--active');
    } else {
      accordionText.style.height = '0';
      accordionButtonIcon.classList.add('faq-card__accordion-button-icon--closed');
      accordionButtonIcon.classList.remove('faq-card__accordion-button-icon--opened');
      accordionButton.classList.remove('faq-card__accordion-button--active');
    }
  });
});
