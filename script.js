var social = [
    {
        icon: '🏡',
        text: 'SeanMcP.com',
        href: 'https://seanmcp.com'
    },
    {
        icon: '🐙',
        text: 'GitHub',
        href: 'https://github.com/seanmcp'
    },
    {
        icon: '👔',
        text: 'LinkedIn',
        href: 'https://linkedin.com/in/seanmcp'
    },
    {
        icon: '🦉',
        text: 'Twitter',
        href: 'https://twitter.com/_seanmcp'
    },
    {
        icon: '📬',
        text: 'Email',
        href: 'mailto:sean@seanmcp.com'
    }
];

var ul = document.querySelector('ul');

social.forEach(function(site) {
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = site.icon;
    span.role = 'img';
    span['aria-hidden'] = true;

    var a = document.createElement('a');
    a.href = site.href;
    a.textContent = site.text;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    li.appendChild(span);
    li.appendChild(a);
    ul.appendChild(li);
});

console.log('I see you there! Make sure to check out of my other sites. 👍');