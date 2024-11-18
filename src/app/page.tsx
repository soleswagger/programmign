import Link from "next/link";
import { db } from "~/server/db"
import { getMyImages } from "~/server/queries";

/*const mockUrls = [
  "https://utfs.io/f/887d212f-4b7e-48e4-8199-62d6c35294ab-m8ejwc.jpg",
  "https://utfs.io/f/af947834-a017-485a-92dc-5559f3561f50-1ody.jpg",
  "https://utfs.io/f/f25a3bb2-dcc8-42e3-84b7-c49eb4d5bb03-1ody.jpg",
  "https://utfs.io/f/6654e8d7-a785-4d52-b5c2-219d74fb22f6-1ody.jpg",
  "https://utfs.io/f/c9b476b8-75f2-4285-ab60-f8258a718347-nm33wo.jpg",
  "https://utfs.io/f/11b2aac1-3b9f-4c0a-b5ac-7cc7e962fc51-2us.jpg"
]

const mockImages = mockUrls.map((url, index)=> ({
  id:index +1,
  url,
})); */

export default async function HomePage() {
  const images= await getMyImages().catch((error)=> {
    console.error(error);
    return null;
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 brightness-200 ">
        {images != null && images.map((image, index) => (
          <div key={image.id} className="w-48 text-green-300	hover:animate-spin">
            <div className="card bg-base-100 w-75 shadow-xl">
  <figure>
    <img
      src={image.url} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      !</h2>
    <p></p>
    <div>{image.createdAt.toString()}</div>
    <div className="card-actions justify-end">
 
    </div>
  </div>
</div>
            <img src={image.url} />
           <div>{image.name}</div>
           <div>{image.createdAt.toString()}</div>
            </div>


            
        ))}
      </div>
    </main>
  );
}


/*    <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
      <div className="badge badge-secondary">NEW</div>*/
      