type TooltipProps = {
  show: boolean;
};

export const Tooltip = ({ show }: TooltipProps) => {
  return (
    <div className={`my-4 mx-12 border-1 border-green-900 bg-green-600/70 rounded-lg p-2 transition-opacity duration-500 ease-out ${show ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <p>Tip: You can drag the tasks to sort them in an order of your choice!</p>
    </div>
  )
}

