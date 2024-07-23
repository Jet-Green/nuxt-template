import type { RestFromDb } from "./rest-from-db.interface"
import type { Role } from "./role.interface"

export interface User {
	_id: string
	name: string
	email: string
	password: string
	rests: RestFromDb[]
	role: Role
	managingRest: string
}
