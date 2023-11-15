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

const MyAccountXtralistLink: FC<Props> = ({ render }: Props) => {
  return render([
    {
      name: "la Sirena Club",
      path: '/sirenaclub',
    }
  ])
}

export default injectIntl(MyAccountXtralistLink)
