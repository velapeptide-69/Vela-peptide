import {NextResponse} from 'next/server';
export async function POST(req:Request){
  const body=await req.json();
  if(!body?.name||!body?.email||!body?.message)return NextResponse.json({error:'Name, email and message are required.'},{status:400});
  // Connect this route to PostgreSQL/Prisma after DATABASE_URL is added.
  return NextResponse.json({ok:true,message:'Enquiry received.'});
}
