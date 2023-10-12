interface Props {
    title: string;
    value: string;
    borderColor: string;
}

const PriceInfoCard = ({ title, value, borderColor } : Props ) => {
  return (
    <div className={`price-info_card border-l-[${borderColor}]`}>
      <p className="text-base text-black-100">{title}</p>

      {/* <div className="flex gap-1">
         <Image />
      </div> */}

      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  )
}

export default PriceInfoCard