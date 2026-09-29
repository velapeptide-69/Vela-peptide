import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
const products = [
  ['Peptides & Proteins','peptides-proteins'],
  ['Immunostimulants','immunostimulants'],
  ['Enzymes','enzymes'],
  ['Vitamins & Minerals','vitamins-minerals'],
  ['Probiotics & Prebiotics','probiotics-prebiotics'],
  ['Functional Additives','functional-additives']
];
async function main(){
  for(const [name,slug] of products){await db.product.upsert({where:{slug},update:{name},create:{name,slug}})}
}
main().finally(()=>db.$disconnect());
