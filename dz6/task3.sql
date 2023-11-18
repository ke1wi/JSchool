SELECT COUNT(DISTINCT address.district) AS districts
FROM customer
JOIN address ON customer.address_id = address.address_id;
