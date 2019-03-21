let s = '##-####-#';
let d = '';
const a = () => Math.floor(Math.random() * 10);

for (let i = 0; i < s.length; i++) {
  if (s[i] === '-') {
    d += '-'
  } 
  else {
    d += a()
  }
}

// 76-9868-9
