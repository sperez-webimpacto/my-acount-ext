import type { FC } from 'react'
import { injectIntl } from 'react-intl'

interface RenderProps {
  name: string
  path: string
}

interface Props {
  render: (paths: RenderProps[]) => any
  intl: any
}

const MyAccountOrdersLink: FC<Props> = ({ render }: Props) => {
  return render([
    {
      name: "Mis Ordenes",
      path: '/giftcards',
    }
  ])
}

export default injectIntl(MyAccountOrdersLink)
