import { Router } from 'express';
import {
  generateRelayerKeys,
  getRelayerKeyInfo,
  rotateRelayerKeys,
  deleteRelayerKeys,
  validateRelayerKey,
  listAllRelayerKeys,
  getRotationStats,
  triggerDekRotation,
  getRelayerPublicKey,
} from '../controllers/relayerKeyController';

const router = Router();

/**
 * Relayer Key Management Routes (Admin Only)
 * 
 * All routes require admin authentication (to be added by auth middleware)
 */

// List all relayer keys
router.get('/relayers/keys', listAllRelayerKeys);

// Get DEK rotation statistics
router.get('/relayers/keys/rotation-stats', getRotationStats);

// Trigger manual DEK rotation
router.post('/relayers/keys/rotate-deks', triggerDekRotation);

// Get public key for a specific relayer
router.get('/relayers/:id/public-key', getRelayerPublicKey);

// Get key information for a specific relayer
router.get('/relayers/:id/keys', getRelayerKeyInfo);

// Generate new key pair for a relayer
router.post('/relayers/:id/keys', generateRelayerKeys);

// Rotate key pair for a relayer
router.put('/relayers/:id/keys/rotate', rotateRelayerKeys);

// Validate encrypted key for a relayer
router.post('/relayers/:id/keys/validate', validateRelayerKey);

// Delete key pair for a relayer (requires confirmation)
router.delete('/relayers/:id/keys', deleteRelayerKeys);

export default router;
