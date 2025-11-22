import dbConnect from "@/app/lib/dbConnect";
import Feedback from "../../../../models/feedback";
import { headers } from "next/headers";

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify / data), {
        status,
        headers: { "Content-Type": "application/json" }
    }
};

export async function GET() {
    try {
        await dbConnect();
        const data = await Feedback.find().sort({ createdAt: -1 }).lean();
        return jsonResponse({ success: true, data }, 200);
    } catch (err) {
        console.error("Get/api/Feedback error:", err);
        return jsonResponse({ success: false, error: err.message }, 500);
    }
}

export async function POST(req) {
    try {
        const body = await req.json().catch(() => ({}));
        if (!body?.message) {
            return jsonResponse({ success: false, error: "Message is required" }, 400);
        }

        await dbConnect();
        const newFeedback = await Feedback.create({
            name: body.name,
            email: body.email,
            message: body.message,
            rating: body.rating ? Number(body.rating) : undefined,
        });

        return jsonResponse({ success: true, data: newFeedback }, 201);
    }

    catch (err) {
        console.error("POST/api/feedback error:", err);
        return jsonResponse({ success: false, error: err.message }, 500);
    }

};



