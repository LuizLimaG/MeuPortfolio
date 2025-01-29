export default function ProjectCards({ tag, title, description, image, url }) {
  return (
    <div className="bg-darkPurple flex flex-col gap-3 p-10 w-[370px] rounded-3xl">
      <div className="h-fit flex items-center justify-between">
        <div className="bg-lightPurple w-fit h-fit px-2 rounded-xl">
          <h5 className="font-poppins font-semibold text-[15px]">{tag}</h5>
        </div>
        <div className="group cursor-pointer px-2 rounded-lg">
          <a
            href={url}
            className="text-justWhite font-poppins font-medium text-[15px] group-hover:text-justPurple group-hover:underline"
            target="_blank">
            Visitar
          </a>
        </div>
      </div>

      <div>
        <div>
          <h3 className="text-justWhite font-poppins font-semibold text-[18px] truncate">
            {title}
          </h3>
        </div>
        <div>
          <h5 className="text-justWhite font-poppins font-light text-[15px] line-clamp-3">
            {description}
          </h5>
        </div>
      </div>

      <div
        className="w-full h-56 bg-cover bg-no-repeat rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
}
