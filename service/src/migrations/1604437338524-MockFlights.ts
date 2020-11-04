import { query } from "express";
import { MigrationInterface, QueryRunner } from "typeorm";

export class MockFlights1604437338524 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        insert into flights ("from", "to", price, company, "departureTime", "arrivalTime", "createdAt") values ('São Paulo, Brazil (GRU)', 'New York, US (JFK)', '4.360', 'LATAM', '2020-11-05T08:15:00-0300', '2020-11-05T21:45:00-0300', '2020-11-03T20:00:00-0300');
        insert into flights ("from", "to", price, company, "departureTime", "arrivalTime", "createdAt") values ('São Paulo, Brazil (GRU)', 'Amsterdam, Netherlands (AMS)', '5.293', 'DUTCH AIRLINES', '2020-11-05T09:10:00-0300', '2020-11-05T17:20:00-0300', '2020-11-03T20:00:00-0300');
        insert into flights ("from", "to", price, company, "departureTime", "arrivalTime", "createdAt") values ('São Paulo, Brazil (CGH)', 'Milan, Italy (LIN)', '3.785', 'LATAM', '2020-11-05T09:50:00-0300', '2020-11-05T17:35:00-0300', '2020-11-03T20:00:00-0300');
        insert into flights ("from", "to", price, company, "departureTime", "arrivalTime", "createdAt") values ('São Paulo, Brazil (GRU)', 'Dubai, Arab Emirates (DXB)', '7.886', 'ALITALIA', '2020-11-05T12:45:00-0300', '2020-11-05T19:38:00-0300', '2020-11-03T20:00:00-0300');
        insert into flights ("from", "to", price, company, "departureTime", "arrivalTime", "createdAt") values ('São Paulo, Brazil (CGH)', 'Rio branco, Acre (RBR)', '1.340', 'GOL', '2020-11-05T13:10:00-0300', '2020-11-05T15:05:00-0300', '2020-11-03T20:00:00-0300')
        `)
    }

    public async down(_: QueryRunner): Promise<void> { }
}
