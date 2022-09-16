const {schema, denormalize} = normalizr;

// const author = new schema.Entity('author', {}, { idAttribute: 'email' });
// const msge = new schema.Entity(
//   'message',
//       {
//         author: author,
//       },
//       { idAttribute: '_id' }
// );
//export const finalSchema = new schema.Array(msgesSchema);


const author = new schema.Entity('authors',{},{idAttribute: 'email'})
const chat = new schema.Entity('chats',{author:author},{})
const msgesSchema = new schema.Entity('chatGroup',{author:author,chats:[chat]})


export function denormalizeData (data) {
	const denormalizedData = denormalize(data.result, msgesSchema, data.entities);
	return denormalizedData;
}