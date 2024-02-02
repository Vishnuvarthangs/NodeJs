/* 

Callstatck is simple data structure provided by v8 javascript engine

call stack
---------
 |
 |

main ()  ==> it is wrapper function

listlocations([...])

foreach(....)

anonymous('India')

Console.log('India')

anonymous('America') --> anonymous('India')

Console.log('America')

*/

const listlocations = (locations) => {
    locations.foreach((location) => {
    console.log(location)
    })
}

const myLocations = ['India', 'America']

listlocations(myLocations)