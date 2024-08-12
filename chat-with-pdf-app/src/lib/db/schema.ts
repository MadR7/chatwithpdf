import 
{ integer, 
  pgEnum, 
  pgTable, 
  serial, 
  text, 
  timestamp, 
  varchar, } 
  from "drizzle-orm/pg-core";

export const userSystemEnum = pgEnum('user_system_enum', ['system', 'user'])

export const chats =  pgTable('chats', {
    id: serial('id').primaryKey(),
    pdfName: text('pdf_name').notNull(),
    pdfUrl: text('pdf_url').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    userId: varchar('user_id', {length:256}).notNull(),
    fileKey: text('file_key').notNull(),
})

export const messages = pgTable('messages', {
    id: serial('id').primaryKey(),
    chatId: integer('chat_id').references(()=>chats.id).notNull(),
    content: text('content').notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    role: userSystemEnum('role').notNull()
})


//drizzle-orm is the one that actaully interacts with the database
//drizzle-kit provides us with utilify functions that helps with migrations
//and helps us make sure that everything is synced and that the schema is pushed up to the neon database