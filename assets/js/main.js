function scrollToElement(elementName) {
    const element = $('#' + elementName);
    
    const elementTeste = document.getElementById(elementName);

    element[0].scrollIntoView({block: "start", behavior: "smooth"});

    document.body.scrollTop += 100;
}