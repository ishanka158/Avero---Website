import ImageCard from "../../components/ImageCard/ImageCard";
import image1 from "../../assets/image01.png";
import image2 from "../../assets/image02.png";
import image3 from "../../assets/image03.png";
import image4 from "../../assets/image04.png";

import axios from "axios";
export function getData() {
  axios
    .get(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=5"
    )
    .then((res) => {
      const blogs = res.data.blogs;

      const newTab = window.open("", "_blank");
      newTab.document.write(
        `<html><head><title>Fetched Data</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"></head><body class="p-8">`
      );

      blogs.forEach((blog) => {
        const title = blog.title;
        const image = blog.photo_url;
        const context = blog.content_html;

        newTab.document.write(
          `<h1 class="text-2xl font-bold mb-2">${title}</h1>`
        );
        newTab.document.write(
          `<img src="${image}" alt="${title}" class="mb-4" />`
        );
        newTab.document.write(`<p class="text-gray-700">${context}</p>`);
        newTab.document.write("<hr class='my-6 border-t border-gray-300' />");
      });

      newTab.document.write("</body></html>");
      newTab.document.close();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function ImageComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <div className="relative flex ml-[150px] mr-1 border-t border-solid border-black sm:ml-[30px]">
          <p className="absolute top-1.5 left-0">Nuclear</p>
          <div className="flex mt-12 w-full sm:w-2/2 ">
            <div className="mr-1" onClick={() => getData()}>
              <ImageCard image={image1} text="Aerospace & Defence" />
            </div>
            <div onClick={() => getData()}>
              <ImageCard image={image2} text="Digital Health" />
            </div>
          </div>
        </div>
        <div className="relative flex mr-[150px] ml-1 border-t border-solid border-black sm:mr-[30px]">
          <p className="absolute top-1.5 left-0">Automotive</p>

          <div className="flex mt-12 w-full sm:w-2/2 ">
            <div onClick={() => getData()}>
              <ImageCard image={image3} text="Rail & Transportation" />
            </div>
            <div className=" ml-1 " onClick={() => getData()}>
              <ImageCard image={image4} text="Medical Devices" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;
