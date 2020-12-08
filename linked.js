// find all the users that have not been linked
const users = require('./users')

const { linked, allUsers} = users

const findNotLinkedYet = (allUsers, linked) =>{
    
    const linkedUserIds = linked.map(user => user.id)
    const notLinkedYet = allUsers.filter( user => !linkedUserIds.includes(user.id) )
    return notLinkedYet
}


console.log(findNotLinkedYet(allUsers, linked))