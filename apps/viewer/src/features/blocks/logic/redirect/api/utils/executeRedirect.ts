import { ExecuteLogicResponse } from '@/features/chat'
import { parseVariables } from '@/features/variables'
import { RedirectBlock, SessionState } from 'models'
import { sanitizeUrl } from 'utils'

export const executeRedirect = (
  { typebot: { variables } }: SessionState,
  block: RedirectBlock,
  lastBubbleBlockId?: string
): ExecuteLogicResponse => {
  if (!block.options?.url) return { outgoingEdgeId: block.outgoingEdgeId }
  const formattedUrl = sanitizeUrl(parseVariables(variables)(block.options.url))
  return {
    clientSideActions: [
      {
        lastBubbleBlockId,
        redirect: { url: formattedUrl, isNewTab: block.options.isNewTab },
      },
    ],
    outgoingEdgeId: block.outgoingEdgeId,
  }
}
