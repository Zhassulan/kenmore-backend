
SELECT 
  u.firstname, 
  u.lastname, 
  u.email, 
  u.birth_date, u.ip_address, s.status FROM users u 
  INNER JOIN user_statuses s ON s.id = u.status_id
WHERE u.firstname like '%iva%' or u.lastname like '%iva%';

SELECT 
  u.firstname, 
  u.lastname, 
  u.email, 
  u.birth_date, u.ip_address, s.status FROM users u 
INNER JOIN user_statuses s ON s.id = u.status_id
WHERE u.email like '%iva%';

SELECT 
  u.firstname, 
  u.lastname, 
  u.email, 
  u.birth_date, u.ip_address, s.status FROM users u 
INNER JOIN user_statuses s ON s.id = u.status_id
WHERE u.birth_date = STR_TO_DATE('10.02.2000', '%d.%m.%Y');

SELECT 
  u.firstname, 
  u.lastname, 
  u.email, 
  u.birth_date, u.ip_address, s.status FROM users u 
INNER JOIN user_statuses s ON s.id = u.status_id
WHERE s.status = 'lead';

/* get files belong user with status */

SELECT  
  u.firstname, 
  u.lastname, 
  u.email, 
  u.birth_date, 
  u.ip_address, 
  s.status,
  f.filename FROM users u 
INNER JOIN user_statuses s ON s.id = u.status_id
LEFT JOIN user_files f ON f.user_id = u.id
WHERE s.status = 'client';

