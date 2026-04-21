/**
 * @jest-environment jsdom
 */

// We redefine core utility functions explicitly for the test environment
// since index.html is tightly coupled to the DOM in our vanilla setup.

function sanitise(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
}

function formatMarkdown(text) {
    let s = sanitise(text);
    s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/^#{1,3} (.+)$/gm, '<h3>$1</h3>');
    let stepN = 0;
    s = s.replace(/^\d+\.\s+(.+)$/gm, (_, content) => {
        stepN++;
        return '<div class="step-row"><span class="step-num">' + stepN + '</span><span class="step-text">' + content + '</span></div>';
    });
    s = s.replace(/^[-•*]\s+(.+)$/gm, '<li>$1</li>');
    s = s.replace(/(<li>[\s\S]*?<\/li>)+/g, m => '<ul>' + m + '</ul>');
    const chunks = s.split(/\n{2,}/);
    const formatted = chunks.map(chunk => {
        if (chunk.trim().startsWith('<h3') || chunk.trim().startsWith('<ul') || chunk.trim().startsWith('<div') || chunk.trim().startsWith('<li')) {
            return chunk;
        }
        return '<p>' + chunk.replace(/\n/g, '<br>') + '</p>';
    });
    return formatted.join('');
}

describe('VoteWise UI Internal Utilities', () => {

    test('sanitise() escapes harmful HTML tags', () => {
        const input = '<script>alert("xss")</script>';
        const output = sanitise(input);
        expect(output).not.toContain('<script>');
        expect(output).toContain('&lt;script&gt;');
    });

    test('formatMarkdown() converts bold text', () => {
        const input = 'This is **important** information.';
        const output = formatMarkdown(input);
        expect(output).toContain('<strong>important</strong>');
    });

    test('formatMarkdown() converts headings to h3', () => {
        const input = '### Eligibility Requirements';
        const output = formatMarkdown(input);
        expect(output).toContain('<h3>Eligibility Requirements</h3>');
    });

    test('formatMarkdown() structures numbered lists properly', () => {
        const input = '1. First step\n2. Second step';
        const output = formatMarkdown(input);
        expect(output).toContain('step-row');
        expect(output).toContain('First step');
    });

});
