(() => {
  if (process.argv.length < 3) {
    return console.error('Error: no input');
  }

  const input = process.argv[2];

  const chars = input.split('');

  const indexes = chars.map((char, i) => i + 1).join(' ');

  console.log(indexes);

  let output = '';

  chars.forEach((char, i) => {
    output += char;
    output += String(i + 1).length === 1 ? ' ' : '  ';
  });

  console.log(output);
})();
