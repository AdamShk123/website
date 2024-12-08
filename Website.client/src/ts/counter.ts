let count = 0;

const raiseCounter = (elem: HTMLDivElement) => {
    count += 1;
    elem.textContent = String(count);
    return count;
};

export { raiseCounter };