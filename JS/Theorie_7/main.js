function cesar(t, d, a)
{
  let f = '';
  for (l of t) {
    let p = a.indexOf(l);
    console.log(p)
    let n = a.length;
    console.log(n)
    let np = (p + d) % n;
    let ld = a[np];
    f += ld;
  }

  return f;
}

cesar('cesar', 3, 'abcdefghijklmnopqrstuvwxyz');

console.log(cesar('Cesar', 3, 'abcdefghijklmnopqrstuvwxyz'));
console.log(cesar('Panda', 3, 'abcdefghijklmnopqrstuvwxyz'));
console.log(cesar('Kiwi', 3, 'abcdefghijklmnopqrstuvwxyz'));

