 const companies= [
     {name: 'company One', category:'Finance', start: 1981, end: 2003},
     {name: 'company Two', category:'Retail', start: 1992, end: 2008},
     {name: 'company Three', category:'Auto', start: 1999, end: 2007},
     {name: 'company Four', category:'Retail', start: 1989, end: 2010},
     {name: 'company Five', category:'Technology', start: 2009, end: 2014},
     {name: 'company Six', category:'Finance', start: 1987, end: 2010},
     {name: 'company seven', category:'Auto', start: 1986, end: 1996},
     {name: 'company Eight', category:'Technology', start: 2011, end: 2016},
     {name: 'company Nine', category:'Retail', start: 1981, end: 1989},
  
 ];

 const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32, ];

//  for(i=0; i<companies.length; i++){
//      console.log(companies[i]);
//  }

// for Each
//  companies.forEach(function(company)
//  { console.log(company.name)
// });

 // filter
// let canDrink = [];
// for(i=0; i<ages.length; i++) {
//     if(ages[i] >= 21){
// canDrink.push(ages[i]);
//     }
// }

// const canDrink =ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// })
// const canDrink = ages.filter(age=> age >=21);
//  const retailCompanies = companies.filter(function(company){
//      if(company.category ==='Retail'){
//          return true;
//      }
//  });

//  const retailCompanies = companies.filter(company => company.category === 'Retail')
//  console.log(retailCompanies);

//  const eightiesCompanies = companies.filter(company => (company.start>= 1980 && company.start < 1990));

//  const aboveTenyears = companies.filter(company =>(company.end - company.start >=10));
//  console.log(aboveTenyears);
 // map
// const companyNames = companies.map(function(company){
// return company.name;
// });

// const Textmap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
//     });

// const Textmap = companies.map(company =>
//      `${company.name} [${company.start} - ${company.end}]`
//     );

// const agemap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);

// const sortedCompanies = companies.sort(function(c1,c2){
//     if(c1.start>c2.start){
//         return 1;
//     } else{
//         return -1;
//     }

// });
 // sort
// const sortedCompanies = companies.sort((a,d) => (a.start>blur.start ? 1 : -1));

//  const sortAges = ages.sort((a,b) => a-b );
//  console.log(sortAges);

  // reduce
// let ageSum=0;
// for(let i =0; i<ages.length; i++){
//     ageSum +=ages[i];
// }
// const ageSum = ages.reduce(function(total, age){
// return total +age;
// }, 0);
// const ageSum = ages.reduce((total, age) =>total+ age,0);
// console.log(ageSum);
// const totalYears = companies.reduce(function(total,company){
// return total + (company.end - company.start);
// }, 0);
// console.log(totalYears);
// const totalYears = companies.reduce((total,company)=> total + (company.end - company.start),
//      0);
//     console.log(totalYears);

// const combined = ages
// .map(age=> age *2)
// .filter(age=> age >= 40)
// .sort((a, b) => a-b)
// .reduce((a, b) => a+b, 0);
// console.log(combined);

 
