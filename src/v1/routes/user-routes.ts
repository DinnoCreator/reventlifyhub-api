import { Router } from "express";
import authenticateToken from "../../utilities/authenticateToken/authenticateToken";
import {
  createRegime,
  fetchImage,
  instagramBasicDisplayInit,
  isLoggedIn,
  nameAvailability,
} from "../controllers/users/usersController";

const router = Router();

// Check regime name availability
router.get("/regime/name/availability", authenticateToken, nameAvailability);

// Create new regime
router.post("/regime/create", authenticateToken, createRegime);

// Archive APIs
router.get("/isloggedin", authenticateToken, isLoggedIn);
router.post("/insta-init", authenticateToken, instagramBasicDisplayInit);
router.get("/insta-images", authenticateToken, fetchImage);

export default router;
