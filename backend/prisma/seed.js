"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.settings.upsert({
            where: {
                id: 1
            },
            update: {},
            create: {
                minimumAge: 14,
                minimumWeight: 40,
                maximumWeight: 120,
                ticketPrice: 50,
                dronePrice: 150,
                handCameraPrice: 80
            }
        });
        yield prisma.operatingDay.create({
            data: {
                date: new Date("2026-07-20"),
                capacity: 50,
                isOpen: true
            }
        });
        console.log("Dados iniciais criados com sucesso!");
    });
}
main()
    .catch((error) => {
    console.error(error);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
