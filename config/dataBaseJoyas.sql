CREATE DATABASE joyas;

\c joyas;


CREATE TABLE inventario (id SERIAL, nombre VARCHAR(50), categoria
VARCHAR(50), metal VARCHAR(50), precio INT, stock INT);


INSERT INTO inventario (nombre, categoria, metal, precio, stock)
VALUES
    ('Collar Heart', 'collar', 'oro', 20000, 2),
    ('Collar History', 'collar', 'plata', 15000, 5),
    ('Aros Berry', 'aros', 'oro', 12000, 10),
    ('Aros Hook Blue', 'aros', 'oro', 25000, 4),
    ('Anillo Wish', 'aros', 'plata', 30000, 4),
    ('Anillo Cuarzo Greece', 'anillo', 'oro', 40000, 2),
    ('Pulsera Elegant', 'pulsera', 'plata', 18000, 3),
    ('Pulsera Charm', 'pulsera', 'oro', 22000, 5),
    ('Collar Diamond', 'collar', 'oro', 35000, 8),
    ('Collar Starlight', 'collar', 'plata', 25000, 6),
    ('Aros Blossom', 'aros', 'oro', 18000, 4),
    ('Aros Infinity', 'aros', 'plata', 20000, 7),
    ('Anillo Luna', 'anillo', 'oro', 28000, 2),
    ('Anillo Topaz', 'anillo', 'plata', 23000, 6),
    ('Collar Phoenix', 'collar', 'plata', 30000, 3),
    ('Aros Twinkle', 'aros', 'plata', 16000, 9),
    ('Anillo Sparkle', 'anillo', 'oro', 32000, 4),
    ('Pulsera Harmony', 'pulsera', 'plata', 21000, 5),
    ('Collar Ocean', 'collar', 'oro', 40000, 7),
    ('Anillo Serenity', 'anillo', 'oro', 35000, 3),
    ('Aros Celestial', 'aros', 'plata', 19000, 6),
    ('Anillo Ruby', 'anillo', 'oro', 38000, 4),
    ('Pulsera Angelic', 'pulsera', 'plata', 24000, 8),
    ('Collar Raindrop', 'collar', 'plata', 27000, 5),
    ('Aros Glitter', 'aros', 'oro', 26000, 4);




