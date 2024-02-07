function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding) * 2; 
    const borderWidth = parseFloat(border) * 2;

    const totalWidth = contentWidth + paddingWidth + borderWidth;

    return totalWidth;
}

