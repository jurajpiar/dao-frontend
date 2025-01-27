import { Paragraph } from '@/components/Typography/Paragraph'
import { Link } from '@/components/Link'
import { currentLinks } from '@/components/LeftSidebar/links'

export const UsefulLinks = () => (
  <div className="mt-[4rem]">
    <Paragraph className="mb-[24px] text-[16px] font-bold">Useful links</Paragraph>
    <div className="flex flex-col pl-[16px]">
      <Link href={currentLinks.rif} variant="menu" className="mb-[14px] text-[14px]" target="_blank">
        RIF
      </Link>
      <Link href={currentLinks.forum} variant="menu" className="mb-[14px] text-[14px]" target="_blank">
        Forum
      </Link>
      <Link href={currentLinks.rbtc} variant="menu" className="mb-[14px] text-[14px]" target="_blank">
        Get RBTC
      </Link>
      <Link href={currentLinks.tokenBridge} variant="menu" className="mb-[14px] text-[14px]" target="_blank">
        Bridge tokens
      </Link>
      <Link href={currentLinks.registerRns} variant="menu" className="mb-[14px] text-[14px]" target="_blank">
        Get RNS Domain
      </Link>
      <Link
        href={currentLinks.tokenResources}
        variant="menu"
        className="mb-[14px] text-[14px]"
        target="_blank"
      >
        Token Resources
      </Link>
    </div>
  </div>
)
