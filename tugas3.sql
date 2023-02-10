Create table tbl_users
( id int not null primary key, username VARCHAR(225), email VARCHAR (225), Password VARCHAR (225), Address TEXT
)
select * from tbl_users
insert into tbl_users
(id, username, email, password, address)
values('01', 'yaser','yaserafrizzal@gmail.com', 'naruto123', 'semarang')

update tbl_users 
set username = ('afrizzal')

delete from tbl_users
where address = ('semarang')
