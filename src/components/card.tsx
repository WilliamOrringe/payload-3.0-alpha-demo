const Card = ({ key }: { key: number }) => {
  return (
    <>
      <div
        className="w-full h-full min-h-[200px] min-w-[200px] bg-[#270C1C] rounded-md p-5 shadow-good"
        key={key}
      >
        <h1 className="font-good">Title</h1>
      </div>
    </>
  )
}

export default Card
