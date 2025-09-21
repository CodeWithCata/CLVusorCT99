const data = [
  {
    id: 1,
    enunt: "1. Se citesc de la tastatură n numere naturale nenule (n≥2). Calculați și afișați cel mai mare divizor comun al celor n numere.",
    exemplu: "Exemplu: pentru n=4, dacă se citesc numerele 16 18 400 128 se va afișa 2",
    program: `#include<iostream.h>
#include<conio.h>
int n,a,b,i;
void main()
{
  cout<<"N=";cin>>n;
  cout<<"A=";cin>>a;
  for(i=1;i<=n-1;i++)
  {
    cout<<"b=";cin>>b;
    while(a!=b)
      if(a>b)
        a=a-b;
      else
        b=b-a;
  }
  cout<<a;
  getch();
}`
  },
  {
    id: 2,
    enunt: "2. Se citesc n triplete de numere întregi (n≥2). Să se numere câte triplete de numere pot reprezenta laturile unui triunghi (echilateral, isoscel, dreptunghic sau oarecare). Dacă nu există astfel de triplete se afișează mesajul “NU EXISTĂ TRIUNGHIURI”.",
    exemplu: "Exemplu: pentru n=3, dacă se citesc tripletele -3 4 5 ; 3 3 4; 3 4 5 se va afișa 1 triunghi isoscel, 1 triunghi dreptunghic.",
    program: `#include<iostream.h>
#include<conio.h>
int n,a,b,c,i,ok=0;
void main()
{
  cout<<"N=";cin>>n;
  for(i=1;i<=n;i++)
  {
    cout<<"a=";cin>>a;
    cout<<"b=";cin>>b;
    cout<<"c=";cin>>c;
    if(a>0 && b>0 && c>0 && a+b>c && b+c>a && c+a>b)
    {
      ok=1;
      if(a==b && b==c)
        cout<<"triunghi echilateral"<<endl;
      else if((a==b && a!=c) || (b==c && b!=a) || (a==c && c!=b))
        cout<<"triunghi isoscel"<<endl;
      else if(a*a+b*b==c*c || a*a+c*c==b*b || b*b+c*c==a*a)
        cout<<"triunghi dreptunghic"<<endl;
      else
        cout<<"triunghi oarecare"<<endl;
    }
  }
  if(ok==0)
    cout<<"NU EXISTA TRIUNGHIURI";
  getch();
}`
  },
  {
    id: 3,
    enunt: "3. Se citesc numere întregi până la citirea valorii zero. Să se afișeze media aritmetică a numerelor prime și media aritmetică a numerelor neprime.",
    exemplu: "Exemplu: pentru numerele 115 45 11 23 2 0 se va afișa media numerelor neprime este 80, media numerelor prime este 12.",
    program: `#include<iostream.h>
#include<conio.h>
int n,d,k,m1=0,m2=0,prim=0,neprim=0;
void main()
{
  cout<<"n=";cin>>n;
  while(n!=0)
  {
    k=0;
    for(d=2;d<=n/2;d++)
      if(n%d==0) k++;
    if(k==0)
    {
      m1=m1+n;
      prim++;
    }
    else
    {
      m2=m2+n;
      neprim++;
    }
    cout<<"n=";cin>>n;
  }
  if(prim>0)
    cout<<"Media nr prime este "<<m1/prim<<endl;
  if(neprim>0)
    cout<<"Media nr neprime este "<<m2/neprim<<endl;
  getch();
}`
  },
  {
    id: 4,
    enunt: "4. Se citesc a și b numere naturale nenule, reprezentând capetele unui interval deschis (a≠b). Se citesc apoi n numere naturale cu cel mult 8 cifre. Să se afișeze și să se numere câte dintre acestea au suma cifrelor în intervalul respectiv. Dacă nu există astfel de numere se afișează mesajul “NU EXISTĂ”.",
    exemplu: "Exemplu: pentru a=5, b=15, n=5 dacă se citesc numerele 32 1000 308 1234 99 se va afișa 2.",
    program: `#include<iostream.h>
#include<conio.h>
int n,a,b,j,c,s,k=0;
void main()
{
  cout<<"a=";cin>>a;
  cout<<"b=";cin>>b;
  cout<<"n=";cin>>n;
  for(j=1;j<=n;j++)
  {
    cout<<"c=";cin>>c;
    s=0;
    while(c!=0)
    {
      s=s+c%10;
      c=c/10;
    }
    if(s>a && s<b)
      k++;
  }
  if(k>0)
    cout<<k;
  else
    cout<<"NU EXISTĂ";
  getch();
}`
  },
  {
    id: 5,
    enunt: "5. Se citesc numere întregi până la citirea numărului zero. Să se afișeze media aritmetică a divizorilor pari pentru fiecare număr citit.",
    exemplu: "Exemplu: pentru numerele 115 16 20 0 se va afișa 0 7.5 9.",
    program: `#include<iostream.h>
#include<conio.h>
int n,d,s,k;
void main()
{
  cout<<"n=";cin>>n;
  while(n!=0)
  {
    s=0;k=0;
    for(d=1;d<=n;d++)
      if(n%d==0 && d%2==0)
      { s+=d; k++; }
    if(k>0)
      cout<<(float)s/k<<endl;
    else
      cout<<"0"<<endl;
    cout<<"n=";cin>>n;
  }
  getch();
}`
  },
    {
    id: 6,
    enunt: "Se citește un șir de n numere naturale. Afișați media aritmetică a numerelor care sunt perfecte (numărul perfect este egal cu suma divizorilor săi, în afară de el însuși). Dacă nu există astfel de numere se afișează mesajul “NU EXISTĂ”.",
    exemplu: "Exemplu: pentru n=3, dacă se citesc 28 14 6 se va afișa 17",
    program: `#include<iostream.h>
#include<conio.h>
int n,m,s=0,i,d,s1,k=0;
void main()
{
  cout<<"m=";cin>>m;
  for(i=1;i<=m;i++)
  {
    cout<<"n=";cin>>n;
    s1=0;
    for(d=1;d<=n-1;d++)
      if(n%d==0)
        s1=s1+d;
    if(s1==n)
    {
      s=s+n;
      k++;
    }
  }
  if(k>0)
    cout<<"media este "<<(s/k);
  else
    cout<<"NU EXISTA";
  getch();
}`
  },
  {
    id: 7,
    enunt: "Se citesc n numere naturale de maxim 9 cifre. Pentru fiecare număr citit, să se calculeze cifra maximă și cifra minimă, precum și numărul lor de apariții. Dacă toate cifrele sunt identice, se va afișa mesajul “CIFRE EGALE”.",
    exemplu: "Exemplu:\n5347372 → cifra maxima 7 numar de aparitii 2, cifra minima 2 numar de aparitii 1\n22222 → CIFRE EGALE\n646464 → cifra maxima 6 numar de aparitii 3, cifra minima 4 numar de aparitii 3",
    program: `#include<iostream.h>
#include<conio.h>
int k,x,cifMax,cifMin,fMax,fMin,ok,primaCifra,c;
void main() {
  int n;
  cin >> n;
  for(k=0;k<n;k++)
  {
    cin >> x;
    cifMax=-1; cifMin=9; fMax=0; fMin=0; ok=1;
    primaCifra = x % 10;
    int y = x;
    while(y>0)
    {
      c = y % 10;
      if(c != primaCifra) ok=0;
      if(c>cifMax) {cifMax=c; fMax=1;}
      else if(c==cifMax) fMax++;
      if(c<cifMin) {cifMin=c; fMin=1;}
      else if(c==cifMin) fMin++;
      y/=10;
    }
    if(ok==1)
      cout<<"CIFRE EGALE"<<endl;
    else
      cout<<"Cifra maxima: "<<cifMax<<" apare de "<<fMax<<" ori, "
          <<"Cifra minima: "<<cifMin<<" apare de "<<fMin<<" ori"<<endl;
  }
  getch();
}`
  },
  {
    id: 9,
    enunt: "Din fișierul Atestat.in se citesc cel mult 100 de numere naturale. Pentru fiecare număr din fișier să se calculeze factorul prim minim și puterea la care apare acesta în descompunerea numărului în factori primi. Rezultatele se vor afișa în fisierul Factor.out pe linii diferite.",
    exemplu: "Atestat.in → 49 45 16 7 2\nFactor.out → 7 2\n3 2\n2 4\n7 1\n2 1",
    program: `#include<iostream.h>
#include<fstream.h>
#include<conio.h>
int x,p,d;
void main()
{
  fstream f("Atestat.in",ios::in);
  fstream g("Factor.out",ios::out);
  while(f>>x)
  {
    for(d=2;;d++)
    {
      if(x%d==0)
      {
        p=0;
        while(x%d==0)
        {
          p++;
          x/=d;
        }
        g<<d<<" "<<p<<"\\n";
        break;
      }
    }
  }
  f.close();
  g.close();
  getch();
}`
  },
  {
    id: 10,
    enunt: "În fișierul Atestat.in se află pe prima linie valoarea n, număr natural nenul, apoi pe următoarea linie n numere întregi. Afișați în fișierul Palindrom.out media aritmetică a numerelor citite din fișier care sunt numere palindroame, sau mesajul “NU EXISTĂ” dacă niciun număr nu este palindrom.",
    exemplu: "Atestat.in → 4\\n789 1221 14 6\nPalindrom.out → 613.5",
    program: `#include<iostream.h>
#include<fstream.h>
#include<conio.h>
int n,num,rev,temp,count=0;
float sum=0;
void main()
{
  fstream f("Atestat.in",ios::in);
  fstream g("Palindrom.out",ios::out);
  f >> n;
  for(int i=0;i<n;i++)
  {
    f >> num;
    temp = num;
    rev = 0;
    while(temp>0)
    {
      rev = rev*10 + temp%10;
      temp/=10;
    }
    if(rev==num)
    {
      sum += num;
      count++;
    }
  }
  if(count>0)
    g<<sum/count;
  else
    g<<"NU EXISTA";
  f.close();
  g.close();
  getch();
}`
  },
    {
    id: 11,
    enunt: "Se dă un vector cu n elemente (n<=100), numere întregi. Să se afișeze elementele vectorului în ordinea următoare: primul, ultimul, al doilea, penultimul, al treilea, antepenultimul etc.",
    exemplu: "Pentru n=7 și vectorul 10 -2 -81 15 3 47 -41 se va afișa 10 -41 -2 47 -81 3 15",
    program: `#include<iostream.h>
#include<conio.h>
int n,i,v[100],st,dr;
void main()
{
  cin>>n;
  for(i=0;i<n;i++)
    cin>>v[i];
  st=0;
  dr=n-1;
  while(st<=dr)
  {
    cout<<v[st]<<" ";
    if(st!=dr)
      cout<<v[dr]<<" ";
    st++; dr--;
  }
  getch();
}`
  },
  {
    id: 12,
    enunt: "Se citește un vector cu n elemente (n<=100), numere întregi. Să se determine câte elemente ale vectorului sunt egale cu suma dintre cea mai mare și cea mai mică valoare din vector. În cazul în care nu există astfel de elemente se va afișa mesajul Nu există.",
    exemplu: "Pentru n=7 și vectorul -3 10 3 7 -2 7 4 se va afișa 2, iar pentru n=7 și vectorul -3 10 6 -2 5 4 -1 se va afișa Nu există",
    program: `#include<iostream.h>
#include<conio.h>
int n,v[100],minim,maxim,tinta,cnt;
void main()
{
  cin>>n;
  for(int i=0;i<n;i++)
    cin>>v[i];
  minim=v[0]; maxim=v[0];
  for(int i=1;i<n;i++)
  {
    if(v[i]<minim) minim=v[i];
    if(v[i]>maxim) maxim=v[i];
  }
  tinta=minim+maxim;
  cnt=0;
  for(int i=0;i<n;i++)
    if(v[i]==tinta) cnt++;
  if(cnt==0) cout<<"NU EXISTA";
  else cout<<cnt;
  getch();
}`
  },
  {
    id: 13,
    enunt: "Din fișierul vector.in se citește un vector cu n elemente (n<=100), numere naturale. Să se verifice dacă există numere prime printre cele citite. Să se afișeze mesajul DA în fișierul vector.out dacă există numere prime sau NU dacă nu există.",
    exemplu: "Pentru n=7 și vectorul 24 25 17 6 3 4 9 se va afișa DA, iar pentru n=5 și vectorul 6 21 8 15 32 se va afișa NU",
    program: `#include<iostream.h>
#include<fstream.h>
#include<conio.h>
int n,v[100],i,j,ok;
int main()
{
  fstream f("vector.in",ios::in);
  fstream g("vector.out",ios::out);
  f>>n;
  ok=0;
  for(i=0;i<n;i++)
  {
    f>>v[i];
    if(v[i]<2) continue;
    int prim=1;
    for(j=2;j*v[j]<=v[i];j++)
      if(v[i]%j==0) prim=0;
    if(prim) ok=1;
  }
  if(ok) g<<"DA";
  else g<<"NU";
  f.close();
  g.close();
  return 0;
}`
  },
  {
    id: 14,
    enunt: "Se citește un vector cu n elemente (n<=100), numere întregi. Să se șteargă din vector toate elementele pare apoi să se afișeze vectorul obținut.",
    exemplu: "Pentru n=10 și vectorul 10 -2 -2 15 -3 4 4 7 8 1 se va afișa 15 -3 7 1",
    program: `#include<iostream.h>
#include<conio.h>
int n,v[100],m,i;
void main()
{
  cin>>n;
  m=0;
  for(i=0;i<n;i++)
    cin>>v[i];
  for(i=0;i<n;i++)
    if(v[i]%2!=0)
      v[m++]=v[i];
  for(i=0;i<m;i++)
    cout<<v[i]<<" ";
  getch();
}`
  },
  {
    id: 15,
    enunt: "Se dă un vector cu n elemente (n<=100), numere naturale și un număr k natural (k<n). Să se ordoneze crescător primele k elemente ale vectorului și descrescător ultimele n-k elemente. Vectorul obținut se va afișa în fișierul vector.out.",
    exemplu: "Pentru n=9, k=4 și vectorul 11 5 27 2 12 30 3 5 5 se va afișa 2 5 11 27 30 12 5 5 3",
    program: `#include<iostream.h>
#include<fstream.h>
#include<conio.h>
int n,k,v[100],i,j,temp;
void main()
{
  fstream f("vector.in",ios::in);
  fstream g("vector.out",ios::out);
  f>>n>>k;
  for(i=0;i<n;i++) f>>v[i];
  // sortam primele k crescator
  for(i=0;i<k-1;i++)
    for(j=i+1;j<k;j++)
      if(v[i]>v[j]) {temp=v[i];v[i]=v[j];v[j]=temp;}
  // sortam ultimele n-k descrescator
  for(i=k;i<n-1;i++)
    for(j=i+1;j<n;j++)
      if(v[i]<v[j]) {temp=v[i];v[i]=v[j];v[j]=temp;}
  for(i=0;i<n;i++)
    g<<v[i]<<" ";
  f.close();
  g.close();
  getch();
}`
  },
  {
    id: 16,
    enunt: "Se dă un vector cu n elemente (n<=100), numere întregi. Să se insereze după fiecare element par din vector un număr x întreg dat de la tastatură și să se afișeze vectorul obținut.",
    exemplu: "Pentru n=9, x=13 și vectorul 10 -2 3 15 -3 4 4 7 8 se va afișa 10 13 -2 13 3 15 -3 4 13 4 13 7 8 13",
    program: `#include<iostream.h>
#include<conio.h>
int n,x,v[101],i;
void main()
{
  cin>>n>>x;
  for(i=0;i<n;i++)
    cin>>v[i];
  for(i=0;i<n;i++)
  {
    cout<<v[i]<<" ";
    if(v[i]%2==0) cout<<x<<" ";
  }
  getch();
}`
  },
  {
    id: 17,
    enunt: "Se dă un vector cu n elemente (n<=100), numere întregi. Să se calculeze suma elementelor din secvența determinată de primul și ultimul element par. Vectorul va conține cel puțin un element par.",
    exemplu: "Pentru n=7 și vectorul 13 2 3 4 5 8 11 se va afișa 22. Explicație: 2+3+4+5+8=22",
    program: `#include<iostream.h>
#include<conio.h>
int n,i,st,dr,v[100],suma;
void main()
{
  cin>>n;
  for(i=0;i<n;i++) cin>>v[i];
  st=-1; dr=-1;
  for(i=0;i<n;i++)
    if(v[i]%2==0) {st=i; break;}
  for(i=n-1;i>=0;i--)
    if(v[i]%2==0) {dr=i; break;}
  suma=0;
  for(i=st;i<=dr;i++)
    suma+=v[i];
  cout<<suma;
  getch();
}`
  },
  {
    id: 18,
    enunt: "Se dă un număr natural n cu maxim 9 cifre. Dacă numărul are toate cifrele distincte se va afișa DA, dacă cel puțin două cifre sunt egale se va afișa NU. Rezolvați problema astfel încât să fie eficientă din punct de vedere al timpului de execuție.",
    exemplu: "Pentru n=987123450 se va afișa DA; pentru n=122997321 se va afișa NU",
    program: `#include<iostream.h>
#include<conio.h>
int n,digit,ok;
bool digits[10];
void main()
{
  cin>>n;
  for(int i=0;i<10;i++) digits[i]=false;
  ok=1;
  while(n>0)
  {
    digit=n%10;
    if(digits[digit]) {ok=0; break;}
    digits[digit]=true;
    n/=10;
  }
  if(ok) cout<<"DA";
  else cout<<"NU";
  getch();
}`
  },
  {
    id: 19,
    enunt: "Se dau doi vectori x și y, fiecare având n elemente (n<=100), numere întregi. Să se construiască și să se afișeze vectorul z după formula z=2*x+y^2 în fișierul vector.out.",
    exemplu: "Pentru n=3, x=(1,2,3), y=(4,5,6) se va afișa 18 29 42",
    program: `#include<iostream.h>
#include<fstream.h>
#include<conio.h>
int n,x[100],y[100],z[100],i;
void main()
{
  fstream f("vector.in",ios::in);
  fstream g("vector.out",ios::out);
  f>>n;
  for(i=0;i<n;i++) f>>x[i];
  for(i=0;i<n;i++) f>>y[i];
  for(i=0;i<n;i++)
    z[i]=2*x[i]+y[i]*y[i];
  for(i=0;i<n;i++)
    g<<z[i]<<" ";
  f.close();
  g.close();
  getch();
}`
  },
  {
    id: 20,
    enunt: "Se dă un vector cu n elemente (n<=100), numere naturale distincte. Să se ordoneze crescător elementele situate înaintea valorii maxime din vector și descrescător elementele situate după această valoare.",
    exemplu: "Pentru n=9 și vectorul 3 2 11 14 17 8 4 5 7 se va afișa 2 3 11 14 17 8 7 5 4",
    program: `#include<iostream.h>
#include<conio.h>
int n,v[100],i,j,maxx,p,aux;
void main()
{
  cin>>n;
  for(i=0;i<n;i++) {cin>>v[i]; if(i==0 || v[i]>maxx){maxx=v[i]; p=i;}}
  // sort crescator elementele inainte de maxim
  for(i=0;i<p;i++)
    for(j=i+1;j<=p;j++)
      if(v[i]>v[j]) {aux=v[i]; v[i]=v[j]; v[j]=aux;}
  // sort descrescator elementele dupa maxim
  for(i=p+1;i<n-1;i++)
    for(j=i+1;j<n;j++)
      if(v[i]<v[j]) {aux=v[i]; v[i]=v[j]; v[j]=aux;}
  for(i=0;i<n;i++) cout<<v[i]<<" ";
  getch();
}`
  }
  ,{
    id: 21,
    enunt: "Se dă o matrice cu n linii și m coloane (n, m numere naturale <=100), elemente numere întregi. Să se ordoneze crescător prima linie a matricei, apoi să se afișeze în fișierul matrice.out.",
    exemplu: "Pentru n=3, m=4 și matricea 4 2 7 1 / 5 6 3 8 / 9 10 11 12, prima linie sortată va fi 1 2 4 7",
    program: `#include<iostream.h>
#include<fstream.h>
#include<conio.h>
int n,m,a[100][100],i,j,aux;
void main()
{
  fstream f("matrice.in",ios::in);
  fstream g("matrice.out",ios::out);
  f>>n>>m;
  for(i=0;i<n;i++)
    for(j=0;j<m;j++)
      f>>a[i][j];

  // sortare prima linie crescator
  for(i=0;i<m-1;i++)
    for(j=i+1;j<m;j++)
      if(a[0][i]>a[0][j])
      {
        aux=a[0][i];
        a[0][i]=a[0][j];
        a[0][j]=aux;
      }

  for(i=0;i<n;i++)
  {
    for(j=0;j<m;j++)
      g<<a[i][j]<<" ";
    g<<endl;
  }

  f.close();
  g.close();
  getch();
}`
},
{
    id: 22,
    enunt: "Se dă o matrice pătratică de dimensiune n (n număr natural<=100), elemente numere întregi. Să se afișeze ce diagonală are suma elementelor mai mare sau dacă suma este egală.",
    exemplu: "Pentru n=4 și matricea 21 6 12 3 / 2 56 4 32 / 8 14 31 9 / 16 91 14 5 se va afișa Diagonala principală",
    program: `#include<iostream.h>
#include<fstream.h>
#include<conio.h>
int n,a[100][100],i,j,s1=0,s2=0;
void main()
{
  fstream f("matrice.in",ios::in);
  f>>n;
  for(i=0;i<n;i++)
    for(j=0;j<n;j++)
      f>>a[i][j];

  for(i=0;i<n;i++)
  {
    s1+=a[i][i];        // diagonala principala
    s2+=a[i][n-1-i];    // diagonala secundara
  }

  if(s1>s2) cout<<"Diagonala principala";
  else if(s2>s1) cout<<"Diagonala secundara";
  else cout<<"Diagonale egale";

  f.close();
  getch();
}`
},
{
    id: 23,
    enunt: "Din fișierul matrice.in se citește o matrice cu n linii și m coloane (n, m numere naturale <=100, m impar), elemente numere întregi. Să se verifice dacă toate elementele coloanei din mijloc sunt impare și se va afișa un mesaj corespunzător.",
    exemplu: "Pentru n=3, m=5 și matricea 21 6 11 95 3 / 12 56 4 18 32 / 8 14 31 25 9 se va afișa NU",
    program: `#include<iostream.h>
#include<fstream.h>
#include<conio.h>
int n,m,a[100][100],i,j,ok=1;
void main()
{
  fstream f("matrice.in",ios::in);
  f>>n>>m;
  for(i=0;i<n;i++)
    for(j=0;j<m;j++)
      f>>a[i][j];

  int col=(m-1)/2;
  for(i=0;i<n;i++)
    if(a[i][col]%2==0) {ok=0; break;}

  if(ok) cout<<"DA";
  else cout<<"NU";

  f.close();
  getch();
}`
},
{
    id: 24,
    enunt: "Scrieți un program care construiește o matrice cu primele n*n (n<=100) numere naturale impare astfel: pe prima coloană elementele sunt ordonate crescător de sus în jos, pe a doua coloană descrescător de sus în jos, pe a treia coloană crescător de sus în jos ș.a.m.d. Matricea se va afișa pe ecran.",
    exemplu: "Pentru n=3, matricea va fi: 1 9 11 / 3 7 13 / 5 5 15 (exemplu schematic)",
    program: `#include<iostream.h>
#include<conio.h>
int n,i,j,num;
void main()
{
  cin>>n;
  int a[100][100];
  num=1;
  for(j=0;j<n;j++)
  {
    if(j%2==0)
      for(i=0;i<n;i++){ a[i][j]=num; num+=2; }
    else
      for(i=n-1;i>=0;i--){ a[i][j]=num; num+=2; }
  }
  for(i=0;i<n;i++)
  {
    for(j=0;j<n;j++)
      cout<<a[i][j]<<" ";
    cout<<endl;
  }
  getch();
}`
},
{
    id: 25,
    enunt: "Scrieți un program care construiește o matrice cu n linii și m coloane (n,m numere naturale<=100) formată din primii n*m termeni impari din șirul lui Fibonacci. Matricea se va afișa pe ecran.",
    exemplu: "Pentru n=4, m=3 se va genera matricea: 1 1 3 / 5 13 21 / 55 89 233 / 377 987 1597",
    program: `#include<iostream.h>
#include<conio.h>
int n,m,i;
void main()
{
  cin>>n>>m;
  int a[100][100];
  long long fib[10000];
  fib[0]=1; fib[1]=1;
  for(i=2;i<n*m;i++)
  {
    fib[i]=fib[i-1]+fib[i-2];
    if(fib[i]%2==0) i--; // sarim peste numere pare
  }
  int k=0;
  for(i=0;i<n;i++)
    for(int j=0;j<m;j++)
      a[i][j]=fib[k++];

  for(i=0;i<n;i++)
  {
    for(int j=0;j<m;j++)
      cout<<a[i][j]<<" ";
    cout<<endl;
  }
  getch();
}`
}

];

export default data;
