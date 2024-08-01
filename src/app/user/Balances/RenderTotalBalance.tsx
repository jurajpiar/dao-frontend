import { useBalancesContext } from '@/app/user/Balances/context/BalancesContext'
import { SupportedTokens } from '@/lib/contracts'
import { formatCurrency } from '@/lib/utils'

interface Props {
  symbol: SupportedTokens
}

export const RenderTotalBalance = ({ symbol }: Props) => {
  const { balances, prices } = useBalancesContext()
  const token = balances[symbol]
  return (
    <>
      <p>
        {token.balance} {token.symbol}
      </p>
      {prices[symbol] && <p>= {formatCurrency(prices[symbol].price * Number(token.balance) ?? 0)}</p>}
    </>
  )
}
