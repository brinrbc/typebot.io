import { ChatReply, SessionState } from 'models'

export type EdgeId = string

export type ExecuteLogicResponse = {
  outgoingEdgeId: EdgeId | undefined
  newSessionState?: SessionState
} & Pick<ChatReply, 'logic'>

export type ExecuteIntegrationResponse = {
  outgoingEdgeId: EdgeId | undefined
  newSessionState?: SessionState
} & Pick<ChatReply, 'integrations'>