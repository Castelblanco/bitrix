// tslint:disable:object-literal-sort-keys

import Client from './client'
import DealsService from './services/deals'
import LeadsService from './services/leads'
import StatusesService from './services/statuses'

export default (restUri: string, token: string) => {
  const { get, getList, batch, list } = Client(restUri, token)

  return {
    get,
    getList,
    batch,
    list,
    deals: DealsService({ get, list }),
    leads: LeadsService({ get, list }),
    statuses: StatusesService({ get, list })
  }
}