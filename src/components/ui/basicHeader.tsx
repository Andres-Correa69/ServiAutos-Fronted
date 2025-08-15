function BasicHeader({ title = "" }: { title?: string }) {
  return (
    <div className="flex flex-col">
      <div className="flex-1 text-white justify-between pt-[50px] pb-[32px]">
        <div>
          <h1 className="text-[22px] md:text-[32px] text-center font-bold">
            {title}
          </h1>
        </div>
      </div>
      <div className="mx-[30px] h-[1px] md:hidden bg-white"></div>
    </div>
  );
}

export default BasicHeader;
