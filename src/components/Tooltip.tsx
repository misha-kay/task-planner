type TooltipProps = {
  hide: boolean;
};

const Tooltip = ({ hide }: TooltipProps) => {
  return (
    <div className={`my-4 mx-12 border-1 border-green-900 bg-green-600/70 rounded-lg p-2 transition-opacity duration-500 ease-out ${hide ? 'opacity-0 hidden' : 'opacity-100'}`}>
      <p>Tip: You can drag the tasks to sort them in an order of your choice!</p>
    </div>
  )
}

export default Tooltip;
